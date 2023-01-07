import { html } from "lit";
import "./index";

export default {
  title: "Components/Switch",
  component: "my-switch",
  args: {},
};

const DefaultTemplate = () => {
  return html` <my-switch></my-switch> `;
};

export const Default: any = DefaultTemplate.bind({});
Default.args = {};
