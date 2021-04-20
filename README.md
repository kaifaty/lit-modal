# LitModal

`<lit-modal></lit-modal>` element expected to use as once instance per app.

## Install

```
npm i lit-modal
```

## Properties/Attributes

| Name        | Prop/Attr    | Type                     |  Description        |
|-------------|--------------|:-------------------------|---------------------|
| `header`    | Prop         | `TemplateResult, null`   | If nou null render `<header></header>` at top of modal         |
| `content`   | Prop         | `TemplateResult, null`   | Content of modal |
| `footer`    | Prop         | `TemplateResult, null`   | Footer of modal |
| `open`      | Attr         | `Boolean`                | Open/close state |
| `closeBtnText` | Attr      | `String`                 | Text of default close btn |
| `useStandartCloseBtn` | Attr | `Boolean`              | Flag of using default close btn|

## Styles

| Name | Default |
|- | - |
|`--modal-overlap`|` rgba(0,0,0,0.7)`|
|`--modal-dialog-background`| `#fefefe` |
|`--modal-dialog-boxshadow`| `rgba(0,0,0,0.7)` |
|`--modal-header-background`|`#111` |
|`--modal-header-color`| `#fefefe` |
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