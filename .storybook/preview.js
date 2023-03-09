import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../dist/custom-elements.json';

setCustomElementsManifest(customElements);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    enableShortcuts: false,
  },
  async viteFinal(config, options) {
    // Add your configuration here
    return config;
  },
}