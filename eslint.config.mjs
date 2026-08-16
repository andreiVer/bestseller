import perfectionist from 'eslint-plugin-perfectionist';

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    plugins: {
      perfectionist
    },
    rules: {
      '@stylistic/semi': ['error', 'always'],
      'perfectionist/sort-imports': ['error', {
        order: 'asc',
        type: 'alphabetical'
      }],
      'perfectionist/sort-interfaces': ['error'],
      'perfectionist/sort-objects': ['error', {
        order: 'asc',
        type: 'alphabetical'
      }],
      'perfectionist/sort-variable-declarations': ['error', {
        order: 'asc',
        type: 'alphabetical'
      }]
    }
  }
);
