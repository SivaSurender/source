import { p as promiseResolve, b as bootstrapLazy } from './index-D1fzevXQ.js';
export { s as setNonce } from './index-D1fzevXQ.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.28.2 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1],"image":[1]}]]]], options);
});
//# sourceMappingURL=comps.js.map

//# sourceMappingURL=comps.js.map