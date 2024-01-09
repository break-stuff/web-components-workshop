import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { styles } from "./my-switch.styles.js";

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

  /** Controls the checked state of the the switch */
  @property({ type: Boolean, reflect: true }) checked: boolean = false;

  @property() label: string = "";

  toggle() {
    this.checked = !this.checked;
  }

  render() {
    return html`
      <span id="label">${this.label}</span>
      <button role="switch" aria-checked=${this.checked} aria-describedby="label" @click=${this.toggle}>
        <div class="track">
          <div class="thumb"></div>
        </div>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-switch": MySwitch;
  }
}
