<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>

      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="text-sm text-gray-600 mb-4">Last revised: {{ $page.post.date }}</div>
      <div class="mb-8">
        <g-link to="/member-manual" class="font-bold uppercase">Back to Manual Index</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style src="../css/github-markdown.css" />

