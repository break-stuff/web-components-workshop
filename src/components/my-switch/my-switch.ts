import { LitElement, html } from 'lit';
import { styles } from './my-switch.styles.js';

/**
 * TODO: Add description
 *
 * @tag my-switch
 *
 * @slot - Default slot description
 * 
 * @csspart my-switch-part - Part exposed for external styles
 * 
 * @cssprop [--custom-color=#670000] - Property exposed for custom styles
 * 
 */
export class MySwitch extends LitElement {
  static styles = styles;

  render() {
    return html`<h1>Hello, Coders!!!</h1>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-switch': MySwitch;
  }
}
