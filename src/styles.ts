import { css } from 'lit';

export const DIALOG_STYLES = css`
.overlap{
    margin: 0;
    top: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 100;
    background-color: var(--modal-overlap, rgba(0,0,0,0.7));
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
    color: black;
    color: var(--modal-dialog-color, black);
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
.closebtn-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: end;
}
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

`