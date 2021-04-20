
import '../src/index';
import { html, render } from 'lit-html';

const header = html`Modal header`;
const content = html`Modal content`;
const footer = html`Modal footer`;

const modal = html`
    <lit-modal open 
    .header = "${header}"
    .content = "${content}"
    .footer = "${footer}"
    ></lit-modal>
`;
render(modal, document.getElementById('app'));