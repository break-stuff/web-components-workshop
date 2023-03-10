import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { styles } from './my-switch.styles';


/**
 * Switches allow the user to toggle an option on or off.
 * 
 * @tag my-switch
 *
 */
@customElement('my-switch')
export class MySwitch extends LitElement {
  static styles = styles;

  render() {
    return html`<h1>Hello, Coders!!!</h1>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-switch': MySwitch
  }
}
