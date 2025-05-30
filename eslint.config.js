import { eslint } from "@siberiacancode/eslint";
import tanstackEsLintPluginQuery from "@tanstack/eslint-plugin-query";
import tanstackEsLintPluginRouter from "@tanstack/eslint-plugin-router";

/** @type {import('@siberiacancode/eslint').Config} */
export default eslint(
  {
    react: true,
    jsx: true,
  },
  {
    name: "web-sample/ignores",
    ignores: ["src/routeTree.gen.ts"],
  },
  tanstackEsLintPluginQuery.configs["flat/recommended"],
  tanstackEsLintPluginRouter.configs["flat/recommended"],
);
