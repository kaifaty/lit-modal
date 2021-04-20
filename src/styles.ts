import { css } from 'lit-element';

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
    width: var(--modal-dialog-width, 700px);
    height: var(--modal-dialog-height, 450px);
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
header h1, header h2, header h3, header h4{
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
.close-icon{
    position: absolute;
    padding: 10px;
    right: 2px;
    top: -2px;
    cursor: pointer;
}
.close-icon svg{
    fill: #888;
}
`