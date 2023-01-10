import { html } from "lit";
import "./index";

export default {
  title: "Components/Switch",
  component: "my-switch",
  argTypes: {
    label: {
      control: { type: "text" },
    },
    labelPosition: {
      control: { type: "radio" },
      options: ["top", "start", "end", "bottom"],
    },
    ["--size"]: {
      control: { type: "text" },
    },
  },
  parameters: {
    actions: {
      handles: ["switch-change"],
    },
  },
};

const DefaultTemplate = (args: any) => {
  return html`
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
    ></my-switch>
  `;
};

export const Default: any = DefaultTemplate.bind({});
Default.args = {
  label: "Test",
  labelPosition: "top",
  ["--size"]: "1rem",
};

const ActionTestTemplate = () => {
  return html`
    <button class="toggle-button">Toggle</button>
    <br />
    <br />
    <my-switch label="Action Test"></my-switch>

    <script>
      const button = document.querySelector(".toggle-button");
      const mySwitch = document.querySelector("my-switch");

      button.addEventListener("click", () => mySwitch.toggle());
    </script>
  `;
};

export const ActionTest: any = ActionTestTemplate.bind({});
ActionTest.args = {};

const IconTemplate = (args: any) => {
  return html`
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
  `;
};

export const IconTest: any = IconTemplate.bind({});
IconTest.args = {
  label: "Icon Test",
  labelPosition: "top",
  ["--size"]: "1rem",
};
