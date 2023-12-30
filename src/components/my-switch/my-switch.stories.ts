import { html } from "lit";
import { Meta, StoryObj } from "@storybook/web-components";
import { getWcStorybookHelpers } from "wc-storybook-helpers";
import "./index.js";
import type { MySwitch } from "./my-switch.js";

const { argTypes, events, args } = getWcStorybookHelpers("my-switch");

const meta: Meta<MySwitch> = {
  title: "Components/MySwitch",
  component: "my-switch",
  args,
  argTypes,
  parameters: {
    actions: {
      handles: [events],
    },
  },
};

export default meta;

type Story = StoryObj<MySwitch & typeof args>;

export const Default: Story = {
  render: (args) => html`
    <style>
      my-switch {
        --switch-size: ${args["--switch-size"]};
        --switch-color: ${args["--switch-color"]};
      }
    </style>
    <my-switch
      label=${args.label}
      label-position=${args.labelPosition}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    ></my-switch>
  `,
  args: {
    label: "Test",
    labelPosition: "top",
    "--switch-size": "1rem",
  },
};

export const ActionTest: Story = {
  render: () => html`
    <button class="toggle-button">Toggle</button>
    <br />
    <br />
    <my-switch label="Action Test"></my-switch>
    <script>
      const button = document.querySelector(".toggle-button");
      const mySwitch = document.querySelector("my-switch");
      button.addEventListener("click", () => mySwitch.toggle());
    </script>
  `,
};

export const Icon: Story = {
  render: (args) => html`
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
    />
    <style>
      my-switch {
        --size: ${args["--size"]};
      }
    </style>
    <my-switch
      label=${args.label}
      label-position=${args.labelPosition}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    >
      <i class="bi bi-emoji-smile" slot="unchecked"></i>
      <i class="bi bi-emoji-smile-fill" slot="checked"></i>
    </my-switch>
  `,
  args: {
    label: "Icon Test",
    labelPosition: "top",
    "--switch-size": "1rem",
  },
};
