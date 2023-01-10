import { css } from "lit";

export const styles = css`
  :host {
    --size: 1rem;
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
    height: var(--size);
    background-color: teal;
    border-radius: var(--size);
    width: calc(var(--size) * 2);
    border: solid teal calc(var(--size) / 8);
  }

  .switch {
    height: var(--size);
    width: var(--size);
    border-radius: var(--size);
    background-color: white;
  }

  [aria-checked="true"] .switch {
    margin-left: auto;
  }

  [disabled] .track {
    background-color: lightgray;
    border: solid lightgray calc(var(--size) / 8);
  }

  ::slotted(.bi) {
    font-size: var(--size);
  }
`;
