# Web Component Workshop

This repo is used as a template for conducting a web component workshop.

## Getting Started

Before getting started you will need to install the dependencies and create an initial build. Run the following command in our terminal:

```bash
npm i && npm run build
```

## Running the Project

There are two ways to run the project so you can test your components.

### Local Dev Server

The first is to run it in a local dev server using the following command:

```bash
npm start
```

This will run the contents located in the `/index.html` file located at the root of your project.

### Storybook

The second method is to run the local storybook instance.

```bash
npm run dev
```

#### Troubleshooting

If you run into a console error when running Storybook, it is likely because you are using a recent verson of Node.js and need to enable the legacy OpenSSL provider. You can do so by executing the relevant command listed below in your terminal:

On Unix-like (Linux, macOS, Git bash, etc.):

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

On Windows command prompt:

```bash
set NODE_OPTIONS=--openssl-legacy-provider
```

On PowerShell:

```bash
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

## Framework Integrations

Framework support for web components is getting better and better every day. For a detailed report of framework compatibility for web components, check out [Custom Elements Everywhere](https://custom-elements-everywhere.com/).

## Angular

Angular has great web component integration. Including the `CUSTOM_ELEMENTS_SCHEMA` in the module allows the use of the web components in the HTML markup without the compiler producing errors. This code should be added into the `AppModule` and in every other modules that use your custom elements.

Here is an example of adding it to `AppModule`:

```ts
import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

> The `CUSTOM_ELEMENTS_SCHEMA` needs to be included in any module that uses custom elements.

###

Vue also has great web component integration. It is as simple as telling Vue to ignore your components when rendering components and views.

Add this to wherever your Vue instance is configured:

```ts
import Vue from "vue";
import App from "./App.vue";

// Tell Vue to ignore all custom elements that are prefixed with "my-"
Vue.config.ignoredElements = [/my-\w*/];

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

### React

React requires a little more care in order to provide developers with the experience they have been accustomed to with React architecture. Because of this, this project is configured to generate React-wrapped components in the `/react` directory to handle a lot of the heavy lifting for you. React users can import those directly into their project and use them like React components.

## Relevant Links

- [Lit](https://lit.dev/) - library used to author the web components
- [Storybook](https://storybook.js.org/) - used to run our dev environment
- [Custom Elements Manifest (CEM) Analyzer](https://custom-elements-manifest.open-wc.org/) - serializes the component metadata
- [VS Code Data Generator](https://www.npmjs.com/package/cem-plugin-vs-code-custom-data-generator) - creates intellisense/autocomplete for our components in VS Code
- [JetBrains Web Type Generator](https://www.npmjs.com/package/cem-plugin-jet-brains-ide-integration) - creates intellisense/autocomplete for our components in JetBrains IDEs (WebStorm, Rider, IntelliJ, PHPStorm...)
- [React Wrappers](https://www.npmjs.com/package/cem-plugin-react-wrapper) - generates react wrappers for better React support
