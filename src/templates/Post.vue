<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <header class="border-b border-gray-200 mb-12">
        <a
          :href="
            `https://github.com/DamesMakingGames/manual/blob/master/${
              $page.post.fileInfo.directory
            }/${$page.post.fileInfo.name}${$page.post.fileInfo.extension}`
          "
          class="btn btn-purple float-right"
          >Edit</a
        >
        <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
        <div class="flex my-8 text-sm">
          <g-link
            :to="tag.path"
            v-for="tag in $page.post.tags"
            :key="tag.id"
            class="tag bg-gray-200 rounded-full px-4 py-2 mr-4 hover:bg-gray-400 no-underline uppercase"
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
<style lang="postcss" scoped>
.tag {
  @apply text-gray-800 font-normal leading-normal no-underline;
}
</style>
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
