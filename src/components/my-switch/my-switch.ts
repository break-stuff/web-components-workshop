import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { styles } from "./my-switch.styles.js";

/**
 * TODO: Add description
 *
 * @tag my-switch
 *
 * @slot label - The label for the switch
 *
 * @csspart switch-thumb - controls the styles of the the thumb element
 * @csspart switch-track - controls the styles of the the track element
 *
 * @cssprop [--switch-color=teal] - background color for track
 * @cssprop [--switch-border-radius=1rem] - border radius for thumb and track
 *
 */
export class MySwitch extends LitElement {
  static styles = [styles];

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
      <span id="label" class="label">    
        <slot name="label">
          ${this.label}
        </slot>
      </span>
      <button 
        role="switch" 
        aria-checked=${this.checked} 
        aria-labelledby="label" 
        aria-disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <div class="track" part="switch-track">
          <div class="thumb" part="switch-thumb"></div>
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
