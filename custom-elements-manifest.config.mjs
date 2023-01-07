import { generateCustomData } from "cem-plugin-vs-code-custom-data-generator";
import { reactWrapper } from "cem-plugin-react-wrapper";
import { generateWebTypes } from "cem-plugin-jet-brains-ide-integration";

export default {
    /** Globs to analyze */
    globs: ['src/**/*.ts'],
    /** Globs to exclude */
    exclude: ['**/*.test.ts', '**/*.styles.ts', '**/*.stories.ts'],
    /** Directory to output CEM to */
    outdir: 'dist',
    /** Output CEM path to `package.json`, defaults to true */
    packagejson: false,
    /** Enable special handling for litelement */
    litelement: true,
    plugins: [
      generateCustomData(),
      generateWebTypes(),
      reactWrapper({
        modulePath: (className, tagName) => `../dist/web-components.js`,
      }),
    ],
  }