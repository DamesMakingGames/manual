// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueScrollTo from "vue-scrollto";
import VueLuxon from "vue-luxon";

import VueFuse from "vue-fuse";
import "~/css/main.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  });

  Vue.use(VueFuse);

  head.meta.push({
    name: "author",
    content: "DMG Toronto",
  });

  Vue.use(VueLuxon, {
    clientZone: "America/Toronto",
    serverZone: "America/Toronto",
    serverFormat: "iso",
    clientZone: "locale",
    clientFormat: "locale",
  });
}
