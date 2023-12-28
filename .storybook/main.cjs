module.exports = {
  stories: ["../src/**/*stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],

  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },

  features: {
    storyStoreV7: true,
  },

  docs: {
    autodocs: true,
  },
};
