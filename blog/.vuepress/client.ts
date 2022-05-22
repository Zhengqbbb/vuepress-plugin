import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import { IVuepress } from "./configs/icons";

import {
  BiGit,
  RiChromeFill,
  ViFileTypeVscode,
  BiTerminalFill,
  BiApple,
  SiDiscord,
  RiInstagramLine,
  CoGit,
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiGitCompare,
  OiRocket,
  RiBilibiliLine,
  RiBook2Fill,
  RiGithubLine,
  RiSailboatLine,
  RiVuejsLine,
  GiHook
} from "oh-vue-icons/icons";

addIcons(
  GiHook,
  BiGit,
  RiChromeFill,
  ViFileTypeVscode,
  BiTerminalFill,
  BiApple,
  SiDiscord,
  RiInstagramLine,
  RiBilibiliLine,
  FaFortAwesome,
  FaTag,
  FaSatelliteDish,
  RiBook2Fill,
  RiVuejsLine,
  CoGit,
  RiGithubLine,
  OiGitCompare,
  OiRocket,
  RiSailboatLine,
  IVuepress
);

export default defineClientConfig({});
