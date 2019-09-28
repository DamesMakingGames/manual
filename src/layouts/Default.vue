<template>
  <div class="content-wrapper bg-background-primary leading-normal flex flex-col min-h-screen">
    <header class="border-t-14 border-purple-700">
      <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
        <div>
          <g-link to="/">DMG</g-link>
        </div>
        <div class="block lg:hidden">
          <button
            @click="toggle"
            class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
          >
            <svg
              class="current-color h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
            </svg>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="isOpen ? 'block': 'hidden'"
        >
          <li class="mr-8 mb-6 lg:mb-0">
            <search-input />
          </li>

          <li class="mr-8 mb-6 lg:mb-0">
            <a
              v-if="$route.path === '/'"
              href="/#contact"
              v-scroll-to="'#contact'"
              class="text-copy-primary hover:text-gray-600"
            >Contact</a>
            <g-link v-else to="/#contact" class="text-copy-primary hover:text-gray-600">Contact</g-link>
          </li>
          <li>
            <g-link to="/member-manual" class="text-copy-primary hover:text-gray-600">Member Manual</g-link>
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-purple-700 text-white">
      <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
        <div class="mb-8 lg:mb-0">
          <div>Copyright 2019. All rights reserved.</div>
          <div>
            <a href="rss.xml" class="text-white hover:text-gray-400 font-normal">RSS Feed</a> |
            <a href="sitemap.xml" class="text-white hover:text-gray-400 font-normal">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SearchInput from "../components/SearchInput";

export default {
  metaInfo: {
    htmlAttrs: {
      lang: "en",
      class: "text-gray-900 antialiased"
    },
    bodyAttrs: {
      class: "font-mono text-base flex flex-col min-h-screen"
    }
  },
  components: {
    SearchInput
  },

  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style src="../css/main.css" />
