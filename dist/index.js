import { __decorate } from "tslib";
<<<<<<< HEAD
import { LitElement, html, nothing } from 'lit';
import { state, customElement, property } from 'lit/decorators';
=======
import { nothing } from 'lit';
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators';
>>>>>>> 4c9baf1491b0556beafa7bf678e18dc65eb23637
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
<<<<<<< HEAD
        this.useCancelBtn = true;
=======
>>>>>>> 4c9baf1491b0556beafa7bf678e18dc65eb23637
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
<<<<<<< HEAD
=======
    headerTemplate() {
        return this.header
            ? html `<header>${this.header ? this.header : nothing}</header>`
            : nothing;
    }
    footerTemplate() {
        return html `        
        <footer class = "">
            ${this.closeBtnText
            ? html `<button type = "button"
                               class = "button"
                               @click = "${this._onClose}"
                        >${this.closeBtnText}</button>`
            : nothing}
            ${this.footer ? this.footer : nothing}
        </footer>`;
    }
>>>>>>> 4c9baf1491b0556beafa7bf678e18dc65eb23637
    render() {
        return html `
        <div @click = "${this._onClick}" 
            class = "overlap ${this.open ? 'visible' : ''}">
            <div class = "dialog">
<<<<<<< HEAD
                <header><slot name = "header"></slot></header>
                <div class = "close-icon"
                    @click = "${this._close}">
=======
                ${this.headerTemplate()}
                <div class = "close-icon"
                    @click = "${this._onClose}">
>>>>>>> 4c9baf1491b0556beafa7bf678e18dc65eb23637
                    <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                        <rect width="2.8124" height="21.0923" rx="1.4062" transform="matrix(0.712062 0.702117 -0.704224 0.709977 14.8538 0)" />
                        <rect width="2.8123" height="21.093" rx="1.40615" transform="matrix(0.704224 -0.709977 0.712062 0.702117 0 2.19031)" />
                    </svg>
                </div>
                <main>
                    <slot></slot>
                </main>
<<<<<<< HEAD
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
=======
                ${this.footerTemplate()}
            </div>
        </div>`;
    }
    _onClick(e) {
        var _a;
        const el = e.target;
        if (el.closest('.confirm')) {
            (_a = this._resolve) === null || _a === void 0 ? void 0 : _a.call(this);
            this._resolve = null;
            this._reject = null;
        }
        if (el.closest('.dialog-hide')) {
            this._onClose();
        }
    }
    _onShow() {
>>>>>>> 4c9baf1491b0556beafa7bf678e18dc65eb23637
        document.body.style.paddingRight = getScrollbarWidth() + "px";
        document.body.style.overflow = 'hidden';
        document.addEventListener("keydown", this._onKeypress.bind(this));
        this.open = true;
    }
<<<<<<< HEAD
    _hide() {
=======
    _onHide() {
>>>>>>> 4c9baf1491b0556beafa7bf678e18dc65eb23637
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
<<<<<<< HEAD
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
=======
    _onClose() {
        this.open = false;
        this._onHide();
    }
    _onKeypress(e) {
        if (e.key === "Escape") {
            this._onClose();
>>>>>>> 4c9baf1491b0556beafa7bf678e18dc65eb23637
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
<<<<<<< HEAD
=======
    showDialog(data) {
        return new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
            this.header = data.header;
            this.content = data.content;
            this.footer = data.footer;
            if (data.closeBtnText) {
                this.closeBtnText = data.closeBtnText;
            }
            this._onShow();
        });
    }
>>>>>>> 4c9baf1491b0556beafa7bf678e18dc65eb23637
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
<<<<<<< HEAD
    property({ type: Boolean })
], LitModal.prototype, "open", void 0);
__decorate([
    property({ type: Boolean })
], LitModal.prototype, "useCancelBtn", void 0);
=======
    state()
], LitModal.prototype, "open", void 0);
>>>>>>> 4c9baf1491b0556beafa7bf678e18dc65eb23637
LitModal = __decorate([
    customElement('lit-modal')
], LitModal);
export { LitModal };
export { DIALOG_MEDIASTYLES };
