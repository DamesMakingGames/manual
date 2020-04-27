<template>
  <div
    class="content-wrapper bg-background-primary leading-normal flex flex-col min-h-screen"
  >
    <header class="border-t-14 border-purple-700">
      <nav
        class="container mx-auto flex flex-wrap justify-between items-center py-8"
      >
        <div>
          <g-link to="/">Manual Home</g-link>
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
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                fill="gray"
              />
            </svg>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="isOpen ? 'block' : 'hidden'"
        >
          <li class="mr-8 mb-6 lg:mb-0">
            <search-input />
          </li>

          <li class="mr-8 mb-6 lg:mb-0">
            <g-link to="/manual" class="text-copy-primary hover:text-purple-800"
              >Index</g-link
            >
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <g-link
              to="/tag/community-manual"
              class="text-copy-primary hover:text-purple-800"
              >For Members</g-link
            >
          </li>
          <li>
            <g-link
              to="/tag/organizers-manual"
              class="text-copy-primary hover:text-purple-800"
              >For Organizers</g-link
            >
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-purple-700 text-white">
      <div
        class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8"
      >
        <div class="mb-8 lg:mb-0">
          <div class="flex justify-center align-middle">
            <a
              class="mr-6"
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              ><img
                alt="Creative Commons Licence"
                style="border-width:0"
                src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"/></a
            ><br />
            <div>
              This work is licensed under a
              <a
                class="text-white hover:text-white"
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                >Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                International License</a
              >
            </div>
            .
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
<style lang="postcss">
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-purple {
  @apply bg-purple-500 text-white;
}
.btn-purple:hover {
  @apply bg-purple-700 text-white;
}
</style>
<script>
import SearchInput from "../components/SearchInput";

export default {
  metaInfo: {
    htmlAttrs: {
      lang: "en",
      class: "text-gray-900 antialiased",
    },
    bodyAttrs: {
      class: "text-base flex flex-col min-h-screen",
    },
  },
  components: {
    SearchInput,
  },

  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style src="../css/main.css" />
