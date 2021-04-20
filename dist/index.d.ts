import { LitElement } from 'lit-element';
import type { TemplateResult } from 'lit-element';
export declare class LitDialog extends LitElement {
    static styles: import("lit-element").CSSResult[];
    static get properties(): {
        open: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    header: TemplateResult | null;
    content: TemplateResult | null;
    footer: TemplateResult | null;
    useStandartCloseBtn: boolean;
    closeBtnText: string;
    _open: boolean;
    get open(): boolean;
    set open(value: boolean);
    tCloseButtonText(): string | null;
    private _tHeader;
    private _tFooter;
    render(): TemplateResult;
    private onShow;
    private onHide;
    private onClose;
    private onKeypress;
}
