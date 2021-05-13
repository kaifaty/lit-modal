import { nothing } from 'lit';
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators';
import type {TemplateResult} from 'lit';
import { getScrollbarWidth } from 'kailib'
import { DIALOG_STYLES } from './styles';
import { DIALOG_MEDIASTYLES } from './styles-media';

@customElement('lit-modal')
export class LitModal extends LitElement{
    static get styles() {
        return [DIALOG_STYLES];
    };
    static get properties() { 
        return { open: { type: Boolean, reflect: true } };
      }
    @state() header: TemplateResult | string | null = null;
    @state() content: TemplateResult | string | null = null;
    @state() footer: TemplateResult | string | null = null;
    @state() closeBtnText: TemplateResult | string = "Close";
    @state() open: boolean = false;
    _onHideEvents: Function[] = [];
    _onShowEvents: Function[] = [];
    _resolve: Function | null = null;
    _reject: Function | null = null;


    private headerTemplate(){
        return this.header 
                ? html`<header>${this.header ? this.header : nothing}</header>` 
                : nothing
    }
    private footerTemplate(){
        return html`        
        <footer class = "">
            ${
                this.closeBtnText 
                ? html`<button type = "button"
                               class = "button"
                               @click = "${this._onClose}"
                        >${this.closeBtnText}</button>`
                : nothing
            }
            ${this.footer ? this.footer : nothing}
        </footer>`;
    }
    render(){
        return html`
        <div @click = "${this._onClick}" 
            class = "overlap ${this.open ? 'visible' : ''}">
            <div class = "dialog">
                ${this.headerTemplate()}
                <div class = "close-icon"
                    @click = "${this._onClose}">
                    <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                        <rect width="2.8124" height="21.0923" rx="1.4062" transform="matrix(0.712062 0.702117 -0.704224 0.709977 14.8538 0)" />
                        <rect width="2.8123" height="21.093" rx="1.40615" transform="matrix(0.704224 -0.709977 0.712062 0.702117 0 2.19031)" />
                    </svg>
                </div>
                <main>
                    <slot></slot>
                    ${
                        this.content 
                            ? this.content 
                            : nothing
                    }
                </main>
                ${this.footerTemplate()}
            </div>
        </div>`
    }
    private _onClick(e: Event){
        const el = e.target as HTMLElement;
        if(el.closest('.confirm')){
            this._resolve?.();
            this._resolve = null;
            this._reject = null;
        }
        if(el.closest('.dialog-hide')){            
            this._onClose();
        }

    }
    private _onShow(){
        document.body.style.paddingRight = getScrollbarWidth() + "px";
        document.body.style.overflow = 'hidden';            
        document.addEventListener("keydown", this._onKeypress.bind(this));
        this.open = true;
    }
    private _onHide(){
        document.body.style.paddingRight = "initial";
        document.body.style.overflow = 'initial';
        document.removeEventListener("keydown", this._onKeypress);
        this._reject?.();
        this.header = null;
        this.content = null;
        this.footer = null;
        this._resolve = null;
        this._reject = null;
        this._onHideEvents.forEach(f => f());
    }
    private _onClose(){
        this.open = false;
        this._onHide();
    }
    private _onKeypress(e: KeyboardEvent){
        if(e.key === "Escape"){
            this._onClose()
        }        
    }
    public onHide(f: Function){
        this._onHideEvents.push(f);
    }
    public offHide(f: Function){
        this._onHideEvents = this._onHideEvents.filter(ef => ef !== f);
    }
    public onShow(f: Function){
        this._onShowEvents.push(f);
    }
    public offShow(f: Function){
        this._onShowEvents = this._onShowEvents.filter(ef => ef !== f);
    }

    public showDialog(data: {
        header: TemplateResult  | string | null,
        content: TemplateResult  | string | null,
        footer: TemplateResult  | string | null,
        closeBtnText?: TemplateResult | string
    }){
        return new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
            this.header = data.header;
            this.content = data.content;
            this.footer = data.footer;
            if(data.closeBtnText){
                this.closeBtnText = data.closeBtnText;
            }
            this._onShow();
        })
    }
}

export {DIALOG_MEDIASTYLES};