/* eslint-disable no-undef */

import { defineClientAppEnhance } from "@vuepress/client";
import { useSearchConsole } from "./composables";

declare const __BA_ID__: string;
declare const __TT_ID__: string;
declare const __BA_AUTOPUSH__: boolean;
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __360_AUTOPUSH__: boolean;

const baiduId = __BA_ID__;
const toutiaoAutoPushId = __TT_ID__;
const autoPushBaiduSwitch = __BA_AUTOPUSH__;
const autoPush360Switch = __360_AUTOPUSH__;

export default defineClientAppEnhance(() => {
  if (__VUEPRESS_SSR__) return;

  useSearchConsole(baiduId, toutiaoAutoPushId, autoPushBaiduSwitch, autoPush360Switch);
});
