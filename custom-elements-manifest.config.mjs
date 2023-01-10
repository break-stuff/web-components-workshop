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
      cleanForStorybook()
    ],
  }

  function cleanForStorybook() {
    return {
      name: 'clean-for-storybook',
      analyzePhase({ ts, node, moduleDoc, context }) {
        if (!context.dev) {
          return;
        }
  
        switch (node.kind) {
          case ts.SyntaxKind.ClassDeclaration: {
            const className = node.name.getText();
            const classDoc = moduleDoc?.declarations?.find(
              declaration => declaration.name === className
            );
            classDoc.members = [];
          }
        }
      },
    };
  }
  