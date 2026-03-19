import parser from '@angular-eslint/template-parser';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(['**/dist', '**/environments', '**/*.module.ts', '**/*.routes.ts']),
  {
    extends: compat.extends('plugin:@typescript-eslint/recommended'),

    plugins: {
      'unused-imports': unusedImports,
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      parser: tsParser,
    },

    rules: {
      'no-unused-vars': 'off',
      'no-console': [
        'error',
        {
          allow: ['error'],
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      semi: ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-namespace': 'off',

      '@typescript-eslint/typedef': [
        'off',
        {
          variableDeclaration: true,
          arrayDestructuring: true,
          memberVariableDeclaration: true,
          objectDestructuring: true,
          parameter: true,
          propertyDeclaration: true,
        },
      ],

      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // '@typescript-eslint/member-ordering': [
      //   'error',
      //   {
      //     default: [
      //       'public-decorated-field',
      //       'protected-decorated-field',
      //       'private-decorated-field',
      //       'public-static-field',
      //       'protected-static-field',
      //       'private-static-field',
      //       'public-instance-field',
      //       'public-abstract-field',
      //       'protected-instance-field',
      //       'protected-abstract-field',
      //       'private-instance-field',
      //       'static-field',
      //       'public-field',
      //       'instance-field',
      //       'protected-field',
      //       'private-field',
      //       'abstract-field',
      //       'constructor',
      //       'public-static-method',
      //       'protected-static-method',
      //       'private-static-method',
      //       'public-method',
      //       'protected-method',
      //       'private-method',
      //     ],
      //   },
      // ],
    },
  },
  {
    files: ['**/*.ts'],

    extends: compat.extends('plugin:@angular-eslint/recommended', 'plugin:@angular-eslint/template/process-inline-templates'),

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
    },

    rules: {
      '@angular-eslint/component-max-inline-declarations': [
        'error',
        {
          animations: 2,
          styles: 5,
          template: 5,
        },
      ],

      '@angular-eslint/no-input-prefix': [
        'error',
        {
          prefixes: ['on'],
        },
      ],

      '@angular-eslint/no-output-on-prefix': ['warn'],
      '@angular-eslint/no-queries-metadata-property': 'error',
      '@angular-eslint/relative-url-prefix': 'error',
      '@angular-eslint/use-component-view-encapsulation': 'warn',
      '@typescript-eslint/await-thenable': 'error',
      '@angular-eslint/prefer-inject': 'off',
      '@angular-eslint/prefer-standalone': 'off',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': 'allow-with-description',
          'ts-check': 'allow-with-description',
          minimumDescriptionLength: 3,
        },
      ],
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/naming-convention': 'off',
      'id-blacklist': 'off',
      'id-denylist': 'off',
      'max-lines': ['warn', 500],
      'no-duplicate-case': 'error',
      'no-extra-bind': 'error',
      'prefer-arrow/prefer-arrow-functions': 'off',
      'no-param-reassign': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'no-redeclare': 'error',
      'no-return-await': 'error',
      'no-sequences': 'error',
      'no-sparse-arrays': 'error',
      'no-debugger': 'error',

      'no-underscore-dangle': [
        'error',
        {
          allowAfterThis: true,
          allowAfterSuper: true,
          allowFunctionParams: false,
        },
      ],

      'no-template-curly-in-string': 'error',

      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],

      'prefer-object-spread': 'error',
      'require-await': 'error',
    },
  },
  {
    files: ['**/*.html'],
    extends: compat.extends('plugin:@angular-eslint/template/recommended'),

    languageOptions: {
      parser: parser,
    },

    rules: {
      '@angular-eslint/template/conditional-complexity': [
        'error',
        {
          maxComplexity: 4,
        },
      ],

      '@angular-eslint/template/no-any': 'off',
      '@angular-eslint/template/no-autofocus': 'off',
    },
  },
]);
