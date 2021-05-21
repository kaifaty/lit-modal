
import '../src/index';
import { html, render } from 'lit';

const modal = html`
    <lit-modal open>
        <div slot = "header">Modal header</div>
        <div>Content text</div>
        <div slot = "footer">
            <button 
                type = "button" 
                class = "dialog-hide">Применить</button>
        </div>
        <div slot = "closeBtn">Закрыть</div>
    </lit-modal>
`;
render(modal, document.getElementById('app'));