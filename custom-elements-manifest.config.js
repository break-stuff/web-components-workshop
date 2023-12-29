import { customElementVsCodePlugin } from "custom-element-vs-code-integration";
import { customElementJetBrainsPlugin } from "custom-element-jet-brains-integration";
import { customElementJsxPlugin } from "custom-element-jsx-integration";
import { customElementVuejsPlugin } from "custom-element-vuejs-integration";
import { customElementReactWrapperPlugin } from "custom-element-react-wrappers";

export default {
  /** Globs to analyze */
  globs: ["src/**/*.ts"],
  /** Globs to exclude */
  exclude: ["**/*.test.ts", "**/*.styles.ts", "**/*.stories.ts", "**/index.ts"],
  /** Directory to output CEM to */
  outdir: "./",
  /** Output CEM path to `package.json`, defaults to true */
  packagejson: true,
  /** Enable special handling for litelement */
  litelement: true,
  plugins: [
    customElementVsCodePlugin(),
    customElementJetBrainsPlugin(),
    customElementJsxPlugin({
      outdir: "types",
      fileName: "jsx.d.ts",
    }),
    customElementReactWrapperPlugin({
      modulePath: () => "../index.js",
    }),
    customElementVuejsPlugin({
      outdir: "types",
      fileName: "vuejs.d.ts",
    }),
  ],
};
