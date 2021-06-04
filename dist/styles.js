import { css } from 'lit';
export const DIALOG_STYLES = css `
.overlap{
    margin: 0;
    top: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 100;
    background-color: var(--modal-overlap, rgba(0,0,0,0.7));
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden
}
.overlap.visible{
    visibility: visible;
}
.dialog{          
    position: relative;  
    width: var(--modal-dialog-width, 600px);
    height: initial;
    overflow-y: auto;
    z-index: 101;
    background-color: var(--modal-dialog-background, #fefefe);
    border-radius: 3px;
    box-sizing: border-box;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;                        
    box-shadow: 1px 1px 8px var(--modal-dialog-boxshadow, rgba(0,0,0,0.7));
}
header{
    position: relative;
    background-color: var(--modal-header-background, #111);
    color: var(--modal-header-color, #fefefe);
    font-size: 16px;
}

header ::slotted(h1), header ::slotted(h2), header ::slotted(h3), header ::slotted(h4){
    margin: 0;
}
main{
    padding: 15px 20px;
    flex: 1 1 auto;
}
header, main, footer{
    padding: 15px 20px;
}
footer{
    display: flex;
    justify-content: space-between;
}
<<<<<<< HEAD
=======
button{
    background-color: var(--button-background, #222);
    border: var(--button-border, none);
    color: var(--button-color, #fefefe);
    padding: var(--button-padding, 5px 10px);
    cursor: pointer;
}
button:hover{
    background-color: var(--button-background-hover, #444);
}
button.primary{
    color: var(--button-primary-color, #444);
    background-color: var(--button-primary-background, #444);
}
button.primary:hover{
    background-color: var(--button-primary-background-hover, #444);
}
>>>>>>> 4c9baf1491b0556beafa7bf678e18dc65eb23637
.close-icon{
    position: absolute;
    padding: 10px;
    right: 2px;
    top: -2px;
    cursor: pointer;
}
.close-icon svg{
    fill: var(--dialog-icon-fill, #888);
}
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
