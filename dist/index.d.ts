import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { DIALOG_MEDIASTYLES } from './styles-media';
export declare class LitModal extends LitElement {
    static get styles(): import("lit").CSSResultGroup[];
    static get properties(): {
        open: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    header: TemplateResult | string | null;
    content: TemplateResult | string | null;
    footer: TemplateResult | string | null;
    closeBtnText: TemplateResult | string;
    open: boolean;
    _onHideEvents: Function[];
    _onShowEvents: Function[];
    _resolve: Function | null;
    _reject: Function | null;
    private headerTemplate;
    private footerTemplate;
    render(): TemplateResult<1>;
    private _onClick;
    private _onShow;
    private _onHide;
    private _onClose;
    private _onKeypress;
    onHide(f: Function): void;
    offHide(f: Function): void;
    onShow(f: Function): void;
    offShow(f: Function): void;
    showDialog(data: {
        header: TemplateResult | string | null;
        content: TemplateResult | string | null;
        footer: TemplateResult | string | null;
        closeBtnText?: TemplateResult | string;
    }): Promise<unknown>;
}
export { DIALOG_MEDIASTYLES };
