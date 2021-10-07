import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
export declare class LitModal extends LitElement {
    static get styles(): import("lit").CSSResult[];
    static get properties(): {
        open: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    closeBtnText: TemplateResult | string;
    open: boolean;
    useCancelBtn: boolean;
    _onHideEvents: Function[];
    _onShowEvents: Function[];
    _onConfirmEvents: Function[];
    render(): TemplateResult<1>;
    private _show;
    private _hide;
    showDialog(): void;
    closeDialog(dispatchEvent?: boolean): void;
    private _onClick;
    private _onKeypress;
    onHide(f: Function): void;
    offHide(f: Function): void;
    onShow(f: Function): void;
    offShow(f: Function): void;
    onConfirm(f: any): void;
    offConfirm(f: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'lit-modal': LitModal;
    }
}
