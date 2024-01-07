# Web Component Workshop

This repo is used as a template for conducting a web component workshop.

## Getting Started

Before getting started you will need to install the dependencies and create an initial build. Run the following command in our terminal:

```bash
npm i && npm run build
```

## Running the Project

```bash
npm run dev
```

Running this command will start the Storybook instance. 

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

To provide type safety and autocomplete, you can generate custom types using the [custom elements Vuejs integration](https://www.npmjs.com/package/custom-element-vuejs-integration).

### React

React does not have great web component support, but fortunately there are a number of tools out there to the wrap components to provide better compatibility. There are some framework-specific tools to generate wrappers, but this project uses a framework agnostic tool that generates them from the Custom Elements Manifest called the (Custom Element react Wrappers)[https://www.npmjs.com/package/custom-element-react-wrappers].

### Additional Integrations

The following tools generate types that provide inline documentation, autocomplete, and type-safe validation for your custom elements.

- [JSX Integration](https://www.npmjs.com/package/custom-element-jsx-integration) -  for non-react frameworks that use JSX like [Preact](https://preactjs.com/) and [StencilJS](https://stenciljs.com/)
- [SolidJS Integration](https://www.npmjs.com/package/custom-element-solidjs-integration)
 

## IDE Integration

- [VS Code Data Generator](https://www.npmjs.com/package/custom-element-vs-code-integration) - creates intellisense/autocomplete for our components in VS Code
- [JetBrains Web Type Generator](https://www.npmjs.com/package/custom-element-jet-brains-integration) - creates intellisense/autocomplete for our components in JetBrains IDEs (WebStorm, Rider, IntelliJ, PHPStorm...)


## Relevant Links

- [Lit](https://lit.dev/) - library used to author the web components
- [Storybook](https://storybook.js.org/) - used to run our dev environment
- [Web Component Storybook Helpers](https://www.npmjs.com/package/wc-storybook-helpers) - provides better integration for web components in Storybook.
- [Custom Elements Manifest (CEM) Analyzer](https://custom-elements-manifest.open-wc.org/) - serializes the component metadata
- [Custom Element Lazy-Loader](https://www.npmjs.com/package/custom-element-lazy-loader) - Automatically loads components from a single entry point.
- [Custom Element Expanded Types](https://www.npmjs.com/package/cem-plugin-expanded-types) - Parses typeScript types to provide better tooling integration.