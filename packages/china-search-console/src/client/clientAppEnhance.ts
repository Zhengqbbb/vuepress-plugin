/* eslint-disable no-undef */

import { defineClientAppEnhance } from "@vuepress/client";
import { useSearchConsole } from "./composables";

declare const __BA_ID__: string;
declare const __360_ID__: string;
declare const __360_FILE__: string;
declare const __BA_AUTOPUSH__: boolean;

const idBaidu = __BA_ID__;
const baiduAutoPush = __BA_AUTOPUSH__;
const id360 = __360_ID__;
const filename360 = __360_FILE__;

export default defineClientAppEnhance(() => {
  if (__VUEPRESS_SSR__) return;

  useSearchConsole(idBaidu, baiduAutoPush, id360, filename360);
});
