// const buildEslintCommand = (filenames) =>
//   `next lint --fix --file ${filenames
//     .map((f) => path.relative(process.cwd(), f))
//     .join(' --file ')}`

module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn type-check',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    `yarn eslint ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};
