import { LitElement, html, nothing} from 'lit';
import type {TemplateResult} from 'lit';
import { state, customElement, property } from 'lit/decorators';
import { getScrollbarWidth } from 'kailib'
import { DIALOG_STYLES } from './styles';
import { DIALOG_MEDIASTYLES } from './styles-media';
//import { BUTTON_STYLES } from '../../styles/buttons';

let isOpened = false;

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
    @property({type: Boolean}) open: boolean = false;
    @property({type: Boolean}) useCancelBtn: boolean = true;
    _onHideEvents: Function[] = [];
    _onShowEvents: Function[] = [];
    _resolve: Function | null = null;
    _reject: Function | null = null;


    render(){
        return html`
        <div @click = "${this._onClick}" 
            class = "overlap ${this.open ? 'visible' : ''}">
            <div class = "dialog">
                <header><slot name = "header"></slot></header>
                <div class = "close-icon"
                    @click = "${this._close}">
                    <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                        <rect width="2.8124" height="21.0923" rx="1.4062" transform="matrix(0.712062 0.702117 -0.704224 0.709977 14.8538 0)" />
                        <rect width="2.8123" height="21.093" rx="1.40615" transform="matrix(0.704224 -0.709977 0.712062 0.702117 0 2.19031)" />
                    </svg>
                </div>
                <main>
                    <slot></slot>
                </main>
                <footer>
                    ${
                        this.useCancelBtn 
                        ? html`<div @click = "${this._close}">
                                    <slot name = "closeBtn">
                                    <button type = "button"
                                            class = "button">${this.closeBtnText}</button>
                                    </slot>
                                </div>`
                        : nothing
                    }
                    <slot name = "footer"></slot>
                </footer>
            </div>
        </div>`
    }
    // **** Actions **** 
    private _show(){
        document.body.style.paddingRight = getScrollbarWidth() + "px";
        document.body.style.overflow = 'hidden';            
        document.addEventListener("keydown", this._onKeypress.bind(this));
        this.open = true;
    }
    private _hide(){
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
    private _close(){
        this.open = false;
        this._hide();
    }
    public showDialog(){
        return new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
            this._show();
        })
    }

    // **** Events **** 
    
    private _onClick(e: Event){
        const el = e.target as HTMLElement;
        if(el.closest('.confirm')){
            this._resolve?.();
            this._resolve = null;
            this._reject = null;
        }
        if(el.closest('.dialog-hide')){            
            this._close();
        }
    }
    private _onKeypress(e: KeyboardEvent){
        if(e.key === "Escape"){
            this._close()
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

}

export {DIALOG_MEDIASTYLES};