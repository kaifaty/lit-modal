import { css } from 'lit';

export const DIALOG_STYLES = css`
.overlap{
    --dialog-z-index: 125;
    margin: 0;
    top: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: var(--dialog-z-index, 100);
    background-color: var(--dialog-overlap, rgba(0,0,0,0.7));
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden
}
.overlap.visible{
    visibility: visible;
}
main{
    overflow-y: auto;
    overflow-x: hidden;
}
.dialog{          
    max-height: var(--dialog-max-height, initial);
    position: var(--dialog-position, relative);
    top: var(--dialog-top, initial);
    left: var(--dialog-left, initial);
    width: var(--dialog-width, 600px);
    height: var(--dialog-height, initial);
    z-index: calc(var(--dialog-z-index, 100) + 1);
    color: black;
    color: var(--dialog-color, black);
    background-color: var(--dialog-background, #fefefe);
    border-radius: 3px;
    box-sizing: border-box;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;                        
    box-shadow: 1px 1px 8px var(--dialog-boxshadow, rgba(0,0,0,0.7));
}

header ::slotted(h1), header ::slotted(h2), header ::slotted(h3), header ::slotted(h4){
    margin: 0;
}
main{
    flex: 1 1 auto;
    padding: var(--dialog-main-padding, var(--dialog-padding, 15px 20px));
}
header{
    position: relative;
    background-color: var(--dialog-header-background, #111);
    color: var(--dialog-header-color, #fefefe);
    padding: var(--dialog-header-padding, var(--dialog-padding, 15px 20px));
    font-size: 16px;
}
footer{
    display: flex;
    justify-content: space-between;
    padding: var(--dialog-footer-padding, var(--dialog-padding, 15px 20px));
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
}`