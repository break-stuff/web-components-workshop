import { css } from 'lit';

export const styles = css`
  :host {
    --custom-color: #670000;
  }

  :host([checked]) .thumb {
    margin-inline-start: auto;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .track {
    display: inline-flex;
    background-color: teal;
    height: 1rem;
    width: 2rem;
    border: 2px solid teal;
    border-radius: 1rem;
  }

  .thumb {
    background-color: white;
    height: 1rem;
    width: 1rem;
    border-radius: 1rem;
  }
`;
