import { PluginConfig, PluginOptions } from 'vuepress';
import docSearchPlugin from './docSearchPlugin';
import vuepressSearchPlugin from './vuepressSearchPlugin';
import registerComponents from './registerComponents';
import codeCopyPlugin from './codeCopyPlugin';

export default [ 
  // registerComponents,
  docSearchPlugin,
  codeCopyPlugin,

  // vuepressSearchPlugin,
] as PluginConfig<PluginOptions>[];
