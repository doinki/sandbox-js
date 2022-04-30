const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint -d @ --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.@(j|t)s?(x)': [buildEslintCommand],
  '*.json': 'prettier --write',
};
