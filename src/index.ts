import { LitElement, html, nothing} from 'lit';
import type {TemplateResult} from 'lit';
import { state, customElement, property } from 'lit/decorators';
import { getScrollbarWidth } from 'kailib'
import { DIALOG_STYLES } from './styles';
import { SCROLLBAR_STYLES } from './scrollbar';

@customElement('lit-modal')
export class LitModal extends LitElement{
    static get styles() {
        return [DIALOG_STYLES, SCROLLBAR_STYLES];
    };
    static get properties() { 
        return { open: { type: Boolean, reflect: true } };
      }
    @state() closeBtnText: TemplateResult | string = "Close";
    @property({type: Boolean}) open: boolean = false;
    @property({type: Boolean}) useCancelBtn: boolean = true;
    _onHideEvents: Function[] = [];
    _onShowEvents: Function[] = [];
    _onConfirmEvents: Function[] = [];

    render(){
        return html`
        <div @click = "${this._onClick}" 
            class = "overlap ${this.open ? 'visible' : ''}">
            <div class = "dialog ">
                <header><slot name = "header"></slot></header>
                <div class = "close-icon"
                    @click = "${this.closeDialog}">
                    <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                        <rect width="2.8124" height="21.0923" rx="1.4062" transform="matrix(0.712062 0.702117 -0.704224 0.709977 14.8538 0)" />
                        <rect width="2.8123" height="21.093" rx="1.40615" transform="matrix(0.704224 -0.709977 0.712062 0.702117 0 2.19031)" />
                    </svg>
                </div>
                <main class = "ff-scrollbar">
                    <slot></slot>
                </main>
                <footer>
                    ${
                        this.useCancelBtn 
                        ? html`<div @click = "${this.closeDialog}" class = "closebtn-wrapper">
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
    private _hide(dispatchEvent: boolean = true){
        document.body.style.paddingRight = "initial";
        document.body.style.overflow = 'initial';
        document.removeEventListener("keydown", this._onKeypress);
        if(dispatchEvent){
            this._onHideEvents.forEach(f => f());
        }        
    }
    public showDialog(){
        this._show();
    }

    public closeDialog(dispatchEvent: boolean = true){
        this.open = false;
        this._hide(dispatchEvent);
    }
    
    // **** Events **** 
    
    private _onClick(e: Event){
        const el = e.target as HTMLElement;
        if(el.closest('.confirm')){
            this._onConfirmEvents.forEach(f => f());
        }
        else if(el.closest('.dialog-hide')){            
            this.closeDialog();
        }
    }
    private _onKeypress(e: KeyboardEvent){
        if(e.key === "Escape"){
            this.closeDialog()
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
    public onConfirm(f) {
        this._onConfirmEvents.push(f);
    }
    public offConfirm(f) {
        this._onConfirmEvents = this._onConfirmEvents.filter(ef => ef !== f);
    }

}
declare global {
    interface HTMLElementTagNameMap {
      'lit-modal': LitModal;
    }
}