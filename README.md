# LitModal

`<lit-modal></lit-modal>` element expected to use as once instance per app.

## Install

```
npm i lit-modal
```

## Properties/Attributes

| Name        | Prop/Attr    | Type                     |  Description        |
|-------------|--------------|:-------------------------|---------------------|
| `open`      | Attr         | `Boolean`                | Open/close state |
| `closeBtnText` | Attr      | `String`                 | Text of default close btn |
| `useStandartCloseBtn` | Attr | `Boolean`              | Flag of using default close btn|

## Styles

| Name | Default |
|- | - |
|`--dialog-overlap`|` rgba(0,0,0,0.7)`|
|`--dialog-background`| `#fefefe` |
|`--dialog-boxshadow`| `rgba(0,0,0,0.7)` |
|`--dialog-header-background`|`#111` |
|`--dialog-header-color`| `#fefefe` |
|`--button-background`| `#222` |
|`--button-background-hover`| `#444` |
|`--button-border`| `none` |
|`--button-color`| `#fefefe` |
|`--button-padding`| `5px 10px` |

## Demo

### HTML 

```
<!DOCTYPE html>
<html>
    <body>
        <div id = 'app'></div>
        <script src = "demo.ts"></script>
    </body>
</html>
```

### JS

```
import 'lit-modal';
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
```