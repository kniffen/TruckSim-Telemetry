import tseslint from 'typescript-eslint';

const stylingRules = {
  'quotes': ['error', 'single'], // enforce the consistent use of single quotes
  'object-curly-spacing': ['error', 'always'], // enforce consistent spacing inside braces
  'indent': ['error', 2, { 'SwitchCase': 1 }], // enforce consistent indentation
  'array-bracket-spacing': ['error', 'never'], // enforce consistent spacing inside array brackets
  'space-infix-ops': ['error', { int32Hint: false }], // require spacing around infix operators
  'no-trailing-spaces': ['error'], // disallow trailing whitespace at the end of lines
  "key-spacing": ["error", { mode: "strict", align: 'value' }], // enforce consistent spacing between keys and values in object literal properties
}

export default tseslint.config(
  {
    ignores: ['eslint.config.js', 'node_modules', 'build', 'dist', 'coverage'],
  },
  {
    files: ['./src/**/*.{js,mjs,cjs,ts}'],
    ignores: ['./src/**/*.test.{js,mjs,cjs,ts}'],
    extends: [
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...stylingRules,
      'no-await-in-loop': ['error'], // disallow await keyword inside of loops
      'prefer-const': ['error'], // require const declarations for variables that are never reassigned after declared
      'no-duplicate-imports': ['error'], // disallow duplicate module imports
      'eqeqeq': ['error', 'always'], // require the use of === and !==
      'yoda': ['error', 'always'], // require or disallow Yoda conditions
      'semi': ['error', 'always'], // require semicolons at the end of statements
      'curly': ['error', 'all'],    // require braces around all control statements

      // Typescript specific
      '@typescript-eslint/no-unused-vars': 'error', // Disallow unused variables
      '@typescript-eslint/no-import-type-side-effects': 'error', // disallow non-null assertion in locations that may be confusing
      '@typescript-eslint/explicit-function-return-type': 'error', // require explicit return types on functions and class methods
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }], // require consistent usage of type imports
      '@typescript-eslint/no-empty-object-type': 'warn',
    },
  },
  {
    files: ['./src/**/*.test.{js,mjs,cjs,ts}'],
    extends: [
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...stylingRules,
      'prefer-const': ['error'],           // require const declarations for variables that are never reassigned after declared
      'no-duplicate-imports': ['error'],           // disallow duplicate module imports
      'semi': ['error', 'always'], // require semicolons at the end of statements
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }], // require consistent usage of type imports
    },
  },
);