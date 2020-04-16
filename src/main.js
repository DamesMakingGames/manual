// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueScrollTo from "vue-scrollto";
import VueLuxon from "vue-luxon";

import VueFuse from "vue-fuse";

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
    content: "Dames Making Games",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700|Roboto:400,400i,900&display=swap",
  });
  Vue.use(VueLuxon, {
    clientZone: "America/Toronto",
  });
}
