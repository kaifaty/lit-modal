
import '../src/index';
import { html, render } from 'lit';

const modal = html`
    <lit-modal open>
        <div slot = "header">Modal header</div>
        <div>Content text</div>
        <div slot = "footer">Modal footer</div>
    </lit-modal>
`;
render(modal, document.getElementById('app'));