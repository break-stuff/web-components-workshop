/** @arg {import('plop').NodePlopAPI} plop */
export default function (plop) {
  plop.setGenerator('component', {
    description: 'generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter your component name in kebab-case (e.g. button-group)',
        default: '',
      },
    ],
    actions: function (data) {
      const basename = data?.name;
      const basePath = 'src/components';
      const componentPath = `${basePath}/{{kebabCase name}}`;

      if (
        !basename ||
        // Must be kebab-case
        !basename.includes('-') ||
        // Must only contain alphanumeric characters and dashes
        !/[a-z0-9-]+/.test(basename) ||
        // Must start with a letter
        !/^[a-z]/.test(basename) ||
        // Must not end in a dash
        basename.endsWith('-')
      ) {
        console.error(
          'The name must contain a dash, include only alphanumeric characters and dashes, start with a letter, and not end in a dash. Please try again.'
        );
        return [];
      }

      return [
        {
          type: 'add',
          skipIfExists: true,
          path: `${componentPath}/{{kebabCase name}}.ts`,
          templateFile: 'plop-templates/component.ts.hbs',
        },
        {
          type: 'add',
          skipIfExists: true,
          path: `${componentPath}/{{kebabCase name}}.styles.ts`,
          templateFile: 'plop-templates/component.styles.ts.hbs',
        },
        {
          type: 'add',
          skipIfExists: true,
          path: `${componentPath}/{{kebabCase name}}.test.ts`,
          templateFile: 'plop-templates/component.test.ts.hbs',
        },
        {
          type: 'add',
          skipIfExists: true,
          path: `${componentPath}/{{kebabCase name}}.stories.ts`,
          templateFile: 'plop-templates/component.stories.ts.hbs',
        },
        {
          type: 'add',
          skipIfExists: true,
          path: `${componentPath}/index.ts`,
          templateFile: 'plop-templates/component.index.ts.hbs',
        },
        {
          type: 'append',
          path: `${basePath}/index.ts`,
          separator: '\n',
          template: 'export * from \'./{{kebabCase name}}/{{kebabCase name}}.js\';',
        },
      ];
    },
  });
}