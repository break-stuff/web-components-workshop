import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, StoryObj } from '@storybook/web-components';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';
import './index.js';
import type { MySwitch } from './my-switch.js';

const { argTypes, events, args, template } = getWcStorybookHelpers('my-switch');

const meta: Meta<MySwitch> = {
  title: 'Components/MySwitch',
  component: 'my-switch',
  args,
  argTypes,
  parameters: {
    actions: {
      handles: [events],
    },
  },
};

export default meta;

type Story = StoryObj<MySwitch>;

export const Default: Story = {
  render: (args) => template(args),
  args: {}
};
