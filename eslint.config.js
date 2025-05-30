import { eslint } from '@siberiacancode/eslint';
import tanstackEslintPluginQuery from '@tanstack/eslint-plugin-query';

/** @type {import('@siberiacancode/eslint').Config} */
export default eslint(
  {
    vue: true
  },
  {
    name: 'web-sample/ignores',
    ignores: ['src/routeTree.gen.ts']
  },
  tanstackEslintPluginQuery.configs['flat/recommended']
);
