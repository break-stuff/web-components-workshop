import { customElementVsCodePlugin } from "custom-element-vs-code-integration";
import { customElementJetBrainsPlugin } from "custom-element-jet-brains-integration";
import { customElementJsxPlugin } from "custom-element-jsx-integration";
import { customElementVuejsPlugin } from "custom-element-vuejs-integration";
import { customElementReactWrapperPlugin } from "custom-element-react-wrappers";
import { getTsProgram, expandTypesPlugin } from "cem-plugin-expanded-types";

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
  overrideModuleCreation: ({ts, globs}) => {
    const program = getTsProgram(ts, globs, "tsconfig.json");
    return program
      .getSourceFiles()
      .filter((sf) => globs.find((glob) => sf.fileName.includes(glob)));
  },
  plugins: [
    customElementVsCodePlugin(),
    customElementJetBrainsPlugin(),
    expandTypesPlugin(),
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
