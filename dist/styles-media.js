import { css } from 'lit-element';
export const DIALOG_MEDIASTYLES = css `
@media screen and (max-width: 600px){
    :host{
        --modal-dialog-width: calc(100% - 40px);
    }
}
@media screen and (max-width: 360px){
    :host{
        --modal-dialog-width: 100%;
    }
}
@media screen and (max-height: 450px){
    :host{
        --modal-dialog-height: 320px;
    }
}
`;
