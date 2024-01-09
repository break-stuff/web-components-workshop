import { css } from 'lit';

export const styles = css`
  :host {
    --switch-color: teal;
    --switch-border-radius: 1rem;
  }

  :host([checked]) .thumb {
    margin-inline-start: auto;
  }

  :host([disabled]) .track {
    --switch-color: #ccc;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .track {
    display: inline-flex;
    background-color: var(--switch-color);
    height: 1rem;
    width: 2rem;
    border: 2px solid var(--switch-color);
    border-radius: var(--switch-border-radius);
  }

  .thumb {
    background-color: white;
    height: 1rem;
    width: 1rem;
    border-radius: var(--switch-border-radius);
  }
`;
