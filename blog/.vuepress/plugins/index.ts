import { PluginConfig, PluginOptions } from "vuepress";
import docSearch from "./docSearch";
import vuepressSearch from "./vuepressSearch";
import registerComponents from "./registerComponents";
import codeCopy from "./codeCopy";
import { pwa, pwaPopup} from "./pwa";

export default [
    // registerComponents,
    // vuepressSearch,
    docSearch,
    codeCopy,
    pwa,
    pwaPopup,
] as PluginConfig<PluginOptions>[];
