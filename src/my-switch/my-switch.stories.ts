import { html } from 'lit';
import './index';
// import { getWcStorybookHelpers } from "wc-storybook-helpers";

// const { argTypes, events, template } = getWcStorybookHelpers('my-switch');

export default {
  title: 'Components/Switch',
  component: 'my-switch',
  argTypes: {},
  parameters: {
    actions: {
      handles: [],
    },
  },
};

const DefaultTemplate = () => {
  return html` <my-switch></my-switch> `;
};

export const Default: any = DefaultTemplate.bind({});
Default.args = {};
