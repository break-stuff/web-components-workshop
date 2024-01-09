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

  /** Label for the switch */
  @property() label: string = "";

  /** Disables the switch */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  toggle() {
    this.checked = !this.checked;
  }

  handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.stopPropagation();
      return;
    }

    this.toggle();
  }

  render() {
    return html`
      <span id="label">${this.label}</span>
      <button 
        role="switch" 
        aria-checked=${this.checked} 
        aria-labelledby="label" 
        aria-disabled=${this.disabled}
        @click=${this.handleClick}
      >
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
