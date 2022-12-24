export default class bRando {
	readonly nodes: NodeList;
	readonly CSSSelector: string;

	private _backgrounds: string[];
	public get backgrounds(): string[] {
		return this._backgrounds;
	}
	public set backgrounds(value: string[]) {
		// prettier-ignore
		this._backgrounds = value == null ? [
            'url("/img/alex-knight-vaA6EQiUSo4-unsplash_result.jpg") center/cover no-repeat', 
            'url("/img/joel-fulgencio-01fAtHwYqo0-unsplash_result.jpg") center/cover no-repeat', 
            'url("/img/pawel-nolbert-4u2U8EO9OzY-unsplash_result.jpg") center/cover no-repeat',
            'url("/img/stephan-valentin-oqYLdbuJDQU-unsplash_result.jpg") center/cover no-repeat',
            'url("/img/waranont-joe-T7qyLNPwgKA-unsplash_result.jpg") center/cover no-repeat',
        ] : value;
	}

	private _timeout: number;
	public get timeout(): number {
		return this._timeout;
	}
	public set timeout(value: number) {
		this._timeout = value || 10000;
	}

	private _random: boolean;
	public get random(): boolean {
		return this._random;
	}
	public set random(value: boolean) {
		this._random = value != null ? value : true;
	}

	private _CSSTransition: string;
	public get CSSTransition(): string {
		return this._CSSTransition;
	}
	public set CSSTransition(value: string) {
		this._CSSTransition = value == null ? "5000ms" : value;
	}

	private timer: number;
	readonly originalCSSBackgrounds: string[];
	readonly originalCSSPositions: string[];
	readonly styleElement: HTMLElement;

	private _isAfterOpaque: boolean;
	private get isAfterOpaque(): boolean {
		return this._isAfterOpaque;
	}
	private set isAfterOpaque(value: boolean) {
		this._isAfterOpaque = value;
	}

	readonly CSSBackgroundVarName: string;
	readonly CSSOpacityVarName: string;
	readonly CSSTransitionVarName: string;

	private _lastBackground: number;
	public get lastBackground(): number {
		return this._lastBackground;
	}
	private set lastBackground(value: number) {
		this._lastBackground = value;
	}

	constructor(CSSSelector?: string, CSSBackgrounds?: string[], timeout?: number, random?: boolean, CSSTransition?: string) {
		this.CSSSelector = CSSSelector == null || CSSSelector == "" ? "body" : CSSSelector;
		this.nodes = document.querySelectorAll(this.CSSSelector);
		this.backgrounds = CSSBackgrounds;
		this.timeout = timeout;
		this.random = random;
		this.CSSTransition = CSSTransition;
		this.originalCSSBackgrounds = [];
		this.originalCSSPositions = [];
		this.nodes.forEach((e) => {
			this.originalCSSBackgrounds.push((e as HTMLElement).style.background); // backup the original CSS background property
			this.originalCSSPositions.push((e as HTMLElement).style.position); // backup the original CSS position property
			(e as HTMLElement).style.position = "relative"; // set each element to be relative
		});
		this.styleElement = document.createElement("style");
		this.CSSBackgroundVarName = `--bRandoBg${this.CSSSelector.replace(/[^a-z0-9]/gi, "")}`;
		this.CSSOpacityVarName = `--bRandoOpacity${this.CSSSelector.replace(/[^a-z0-9]/gi, "")}`;
		this.CSSTransitionVarName = `--bRandoTransition${this.CSSSelector.replace(/[^a-z0-9]/gi, "")}`;
		this.styleElement.innerText = `${this.CSSSelector}::after{background:var(${this.CSSBackgroundVarName});content:'';position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;opacity:var(${this.CSSOpacityVarName});transition: var(${this.CSSTransitionVarName});}`;
		document.head.append(this.styleElement);
		this.isAfterOpaque = false;
		this.lastBackground = -1;
		this.nodes.forEach((e) => {
			(e as HTMLElement).style.setProperty(this.CSSOpacityVarName, "0");
			(e as HTMLElement).style.setProperty(this.CSSTransitionVarName, `opacity ${this.CSSTransition}`);
			(e as HTMLElement).style.zIndex = "0";
		});
	}
	play(): void {
		this.next();
		this.timer = window.setInterval(() => {
			this.next();
		}, this.timeout);
	}
	pause(): void {
		clearInterval(this.timer);
	}
	next(): void {
		const getNewRandomBackgroundIndex = (): number => {
			let newIndex: number;
			do {
				newIndex = Math.floor(Math.random() * this.backgrounds.length);
			} while (this.lastBackground === newIndex);
			return newIndex;
		};
		this.lastBackground = this.random ? getNewRandomBackgroundIndex() : this.lastBackground === this.backgrounds.length - 1 ? (this.lastBackground = 0) : this.lastBackground + 1;
		this.nodes.forEach((e) => {
			if (!this.isAfterOpaque) {
				(e as HTMLElement).style.setProperty(this.CSSBackgroundVarName, this.backgrounds[this.lastBackground]);
				(e as HTMLElement).style.setProperty(this.CSSOpacityVarName, "1");
			} else {
				(e as HTMLElement).style.background = this.backgrounds[this.lastBackground];
				(e as HTMLElement).style.setProperty(this.CSSOpacityVarName, "0");
			}
		});
		this.isAfterOpaque = !this.isAfterOpaque;
	}
	remove(): void {
		this.pause();
		this.nodes.forEach((e, i) => {
			(e as HTMLElement).style.background = this.originalCSSBackgrounds[i]; // restore original CSS background property
			(e as HTMLElement).style.position = this.originalCSSPositions[i]; // restore original CSS position property
		});
	}
}