import { __decorate } from "tslib";
import { LitElement, html, nothing } from 'lit';
import { state, customElement, property } from 'lit/decorators';
import { getScrollbarWidth } from 'kailib';
import { DIALOG_STYLES } from './styles';
import { DIALOG_MEDIASTYLES } from './styles-media';
let LitModal = class LitModal extends LitElement {
    constructor() {
        super(...arguments);
        this.header = null;
        this.content = null;
        this.footer = null;
        this.closeBtnText = "Close";
        this.open = false;
        this.useCancelBtn = true;
        this._onHideEvents = [];
        this._onShowEvents = [];
        this._resolve = null;
        this._reject = null;
    }
    static get styles() {
        return [DIALOG_STYLES];
    }
    ;
    static get properties() {
        return { open: { type: Boolean, reflect: true } };
    }
    render() {
        return html `
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
                    ${this.useCancelBtn
            ? html `<div @click = "${this._close}">
                                    <slot name = "closeBtn">
                                    <button type = "button"
                                            class = "button">${this.closeBtnText}</button>
                                    </slot>
                                </div>`
            : nothing}
                    <slot name = "footer"></slot>
                </footer>
            </div>
        </div>`;
    }
    // **** Actions **** 
    _show() {
        document.body.style.paddingRight = getScrollbarWidth() + "px";
        document.body.style.overflow = 'hidden';
        document.addEventListener("keydown", this._onKeypress.bind(this));
        this.open = true;
    }
    _hide() {
        var _a;
        document.body.style.paddingRight = "initial";
        document.body.style.overflow = 'initial';
        document.removeEventListener("keydown", this._onKeypress);
        (_a = this._reject) === null || _a === void 0 ? void 0 : _a.call(this);
        this.header = null;
        this.content = null;
        this.footer = null;
        this._resolve = null;
        this._reject = null;
        this._onHideEvents.forEach(f => f());
    }
    _close() {
        this.open = false;
        this._hide();
    }
    showDialog() {
        return new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
            this._show();
        });
    }
    // **** Events **** 
    _onClick(e) {
        var _a;
        const el = e.target;
        if (el.closest('.confirm')) {
            (_a = this._resolve) === null || _a === void 0 ? void 0 : _a.call(this);
            this._resolve = null;
            this._reject = null;
        }
        if (el.closest('.dialog-hide')) {
            this._close();
        }
    }
    _onKeypress(e) {
        if (e.key === "Escape") {
            this._close();
        }
    }
    onHide(f) {
        this._onHideEvents.push(f);
    }
    offHide(f) {
        this._onHideEvents = this._onHideEvents.filter(ef => ef !== f);
    }
    onShow(f) {
        this._onShowEvents.push(f);
    }
    offShow(f) {
        this._onShowEvents = this._onShowEvents.filter(ef => ef !== f);
    }
};
__decorate([
    state()
], LitModal.prototype, "header", void 0);
__decorate([
    state()
], LitModal.prototype, "content", void 0);
__decorate([
    state()
], LitModal.prototype, "footer", void 0);
__decorate([
    state()
], LitModal.prototype, "closeBtnText", void 0);
__decorate([
    property({ type: Boolean })
], LitModal.prototype, "open", void 0);
__decorate([
    property({ type: Boolean })
], LitModal.prototype, "useCancelBtn", void 0);
LitModal = __decorate([
    customElement('lit-modal')
], LitModal);
export { LitModal };
export { DIALOG_MEDIASTYLES };
