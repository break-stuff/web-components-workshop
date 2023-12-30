import { css } from "lit";

export const styles = css`
  :host {
    --switch-size: 1rem;
    --switch-color: teal;
    display: inline-block;
    text-align: left;
  }
  .base {
    display: flex;
    gap: 0.25rem;
    justify-content: space-between;
  }
  .label {
    line-height: 1;
  }
  .control {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
  }
  [disabled].control {
    cursor: not-allowed;
  }
  .track {
    height: var(--switch-size);
    background-color: var(--switch-color);
    border-radius: var(--switch-size);
    width: calc(var(--switch-size) * 2);
    border: solid var(--switch-color) calc(var(--switch-size) / 8);
  }
  .switch {
    height: var(--switch-size);
    width: var(--switch-size);
    border-radius: var(--switch-size);
    background-color: white;
  }
  [aria-checked="true"] .switch {
    margin-left: auto;
  }
  [disabled] .track {
    background-color: lightgray;
    border: solid lightgray calc(var(--switch-size) / 8);
  }
  ::slotted(.bi) {
    font-size: var(--switch-size);
  }
`;
