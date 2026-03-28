import js           from '@eslint/js';
import reactPlugin   from 'eslint-plugin-react';
import reactHooks    from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  {
    plugins: {
      react:        reactPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',  // Not needed with React 17+ JSX transform
      'react-hooks/rules-of-hooks':  'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars':              'warn',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];
