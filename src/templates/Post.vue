<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <header class="border-b border-gray-200 mb-12">
        <div class="edit flex float-right align-middle justify-center">
          <a
            :href="
              `https://github.com/DamesMakingGames/manual/blob/master/${
                $page.post.fileInfo.directory
              }/${$page.post.fileInfo.name}${$page.post.fileInfo.extension}`
            "
            class="btn btn-purple"
            >Edit</a
          ><a class="p-2" href="/manual/how-to-edit-this-manual/"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-help-circle"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line></svg
          ></a>
        </div>
        <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
        <div class="flex my-8 text-sm">
          <g-link
            :to="tag.path"
            v-for="tag in $page.post.tags"
            :key="tag.id"
            class="tag bg-gray-200 rounded-full px-4 py-2 mr-4 hover:bg-gray-400 no-underline uppercase "
            >{{ tag.title }}</g-link
          >
        </div>
      </header>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="text-sm text-gray-600 mb-4">
        Last revised: {{ $page.post.date }}
      </div>
      <div class="mb-8">
        <g-link to="/manual" class="font-bold uppercase"
          >Back to Manual Index</g-link
        >
      </div>
    </div>
  </Layout>
</template>

<page-query>

query Post($path: String!) {
  post: post(path: $path) {
    title
    path
    date(format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
    fileInfo {
      directory
      name
      extension
    }
    timeToRead
  }
}


</page-query>
<style lang="postcss" scoped></style>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style src="../css/github-markdown.css" />
