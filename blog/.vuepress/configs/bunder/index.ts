import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";

export const bundler = process.env.DOCS_BUNDLER === "webpack" ? webpackBundler() : viteBundler();
