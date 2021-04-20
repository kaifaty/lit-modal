import { nothing } from 'lit-html';
import { customElement, LitElement, html, property } from 'lit-element';
import type {TemplateResult} from 'lit-element';
import { getScrollbarWidth } from 'kailib'
import { DIALOG_STYLES } from './styles';
//import { BUTTON_STYLES } from '../../styles/buttons';

let isOpened = false;

@customElement('lit-modal')
export class LitModal extends LitElement{
    static styles = [DIALOG_STYLES];
    static get properties() { 
        return { open: { type: Boolean, reflect: true } };
      }
    @property({type: Object, attribute: false}) header: TemplateResult | null = null;
    @property({type: Object, attribute: false}) content: TemplateResult | null = null;
    @property({type: Object, attribute: false}) footer: TemplateResult | null = null;
    @property({type: Boolean, attribute: true}) useStandartCloseBtn: boolean = true;
    @property({type: String, attribute: true}) closeBtnText: string = 'Close';

    _open: boolean = false;
    get open(){
        return this._open;
    }
    set open(value: boolean){
        if(isOpened && value) return;
        const oldVal = this._open;
        this._open = value;
        isOpened = value;
        value ? this.onShow()
              : this.onHide()        
        this.requestUpdate('open', oldVal);
    }
    public tCloseButtonText(): string | null{
        return null;
    }
    private _tHeader(){
        return this.header 
                ? html`<header>${this.header ? this.header : nothing}</header>` 
                : nothing
    }
    private _tFooter(){
        return html`        
        <footer class = "">
            ${
                this.useStandartCloseBtn 
                ? html`<button type = "button"
                               class = "button"
                               @click = "${this.onClose}"
                        >${this.tCloseButtonText() || this.closeBtnText}</button>`
                : nothing
            }
            ${this.footer ? this.footer : nothing}
        </footer>`;
    }
    render(){
        return html`
        <div class = "overlap ${this.open ? 'visible' : ''}">
            <div class = "dialog">
                ${this._tHeader()}
                <div class = "close-icon"
                    @click = "${this.onClose}">
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
                ${this._tFooter()}
            </div>
        </div>`
    }
    private onShow(){
        document.body.style.paddingRight = getScrollbarWidth() + "px";
        document.body.style.overflow = 'hidden';            
        document.addEventListener("keydown", this.onKeypress.bind(this));
    }
    private onHide(){
        document.body.style.paddingRight = "initial";
        document.body.style.overflow = 'initial';
        document.removeEventListener("keydown", this.onKeypress);
        this.header = null;
        this.content = null;
        this.footer = null;
        this.useStandartCloseBtn = true;
    }
    private onClose(){
        this.open = false;
    }
    private onKeypress(e: KeyboardEvent){
        if(e.key === "Escape"){
            this.open = false;
        }        
    }
}
