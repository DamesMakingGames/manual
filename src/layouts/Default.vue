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
        class="container md:px-16 mx-auto flex flex-col lg:flex-row justify-between py-8"
      >
        <div class="w-full lg:w-1/3">
          <ul>
            <li class="mb-3">
              <a href="https://dmg.to">dmg.to</a>
            </li>
            <li class="mb-3">
              <a href="/tag/code-of-conduct/">Code of Conduct</a>
            </li>
            <li class="">
              <a href="/manual/index/">New members</a>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/3">
          <ul>
            <li class="mb-3">
              <a href="/manual/how-to-edit-this-manual/">Suggest Edits</a>
            </li>
            <li class="mb-3">
              <a
                href="https://github.com/DamesMakingGames/manual/blob/master/README.md"
                >README</a
              >
              /
              <a
                href="https://github.com/DamesMakingGames/manual/blob/master/CONTRIBUTING.md"
                >CONTRIBUTING</a
              >
            </li>
            <li>
              <a href="https://github.com/DamesMakingGames/manual"
                >This project on GitHub</a
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github in inline ml-2"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/3 lg:text-right align-text-top align-top">
          This work is licensed under a
          <a
            class="text-white hover:text-white"
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >Creative Commons Attribution-NonCommercial-ShareAlike 4.0
            International License</a
          >
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
footer {
  a {
    @apply text-white font-normal underline;
    &:hover {
      @apply text-purple-200;
    }
  }
}
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
