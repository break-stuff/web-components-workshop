# Web Component Workshop

This repo is used as a template for conducting a web component workshop. The components are written using the [Lit library](https://lit.dev/).

## Getting Started

Before getting started you will need to install the dependencies and create an initial build. Run the following command in your terminal:

```bash
npm i && npm run build
```

## Creating Components

A component generator has been set up in this project using [Plop templates](https://plopjs.com/). Creating a new component can be done using the following command and following the instructions:

```bash
npm run plop
```

## Running Storybook

```bash
npm run dev
```

Running this command will start the [Storybook](https://storybook.js.org/) instance. The Storybook experienced has been enhanced using the [Web Component Storybook Helpers](https://www.npmjs.com/package/wc-storybook-helpers) to provides better integration for web components.

## Running Tests

Tests are done using [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) and [Playwright](https://modern-web.dev/docs/test-runner/browser-launchers/playwright/), so tests are run in _actual_ browsers (Chrome, Firefox, and Safari/WebKit). Tests can be run using the following command:

```bash
npm run test
```

## Framework Integrations

Framework support for web components is getting better and better every day. For a detailed report of framework compatibility for web components, check out [Custom Elements Everywhere](https://custom-elements-everywhere.com/).

### Angular

Angular has great web component integration. Including the `CUSTOM_ELEMENTS_SCHEMA` in the module allows the use of the web components in the HTML markup without the compiler producing errors. This code should be added into the `AppModule` and in every other modules that use your custom elements.

Here is an example of adding it to `AppModule`:

```ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

> The `CUSTOM_ELEMENTS_SCHEMA` needs to be included in any module that uses custom elements.

The `CUSTOM_ELEMENTS_SCHEMA` does not provide any additional data about your components, so i recommend using the tools in the IDE Support Section

### Vue.js

If you haven't configured your Vue.js project to work with custom elements/web components, follow [the instructions here](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue) based on your project type to ensure the components work correctly.

To provide type safety and autocomplete, you can generate custom types using the [Custom Elements Vuejs Integration](https://www.npmjs.com/package/custom-element-vuejs-integration) package.

### React

React does not have great web component support, but fortunately there are a number of tools out there to the wrap components to provide better compatibility. There are some framework-specific tools to generate wrappers, but this project uses a framework agnostic tool that generates them from the Custom Elements Manifest called the [Custom Element React Wrappers](https://www.npmjs.com/package/custom-element-react-wrappers).

### Additional Integrations

The following tools generate types that provide inline documentation, autocomplete, and type-safe validation for your custom elements.

- [JSX Integration](https://www.npmjs.com/package/custom-element-jsx-integration) -  for non-react frameworks that use JSX like [Preact](https://preactjs.com/) and [StencilJS](https://stenciljs.com/)
- [SolidJS Integration](https://www.npmjs.com/package/custom-element-solidjs-integration)
 

## IDE Integration

- [VS Code Data Generator](https://www.npmjs.com/package/custom-element-vs-code-integration) - creates intellisense/autocomplete for our components in [VS Code](https://code.visualstudio.com/)
- [JetBrains Web Type Generator](https://www.npmjs.com/package/custom-element-jet-brains-integration) - creates intellisense/autocomplete for our components in [JetBrains IDEs](https://www.jetbrains.com/) (WebStorm, Rider, IntelliJ, PHPStorm...)


## Additional Links

- [Custom Elements Manifest (CEM) Analyzer](https://custom-elements-manifest.open-wc.org/) - serializes the component metadata
- [Custom Element Lazy-Loader](https://www.npmjs.com/package/custom-element-lazy-loader) - Automatically loads components from a single entry point.
- [Custom Element Expanded Types](https://www.npmjs.com/package/cem-plugin-expanded-types) - Parses TypeScript types to provide better tooling integration.