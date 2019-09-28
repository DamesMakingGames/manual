<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h2 class="text-3xl font-bold mb-4 pb-4 border-b">{{ $page.tag.title }}</h2>
      <div v-html="$page.tag.content" class="mb-8 pb-4" />

      <div
        v-for="post in $page.tag.belongsTo.edges"
        :key="post.node.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-xl md:text-2xl font-bold mb-0">
          <g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link>
        </h2>

        <div class="md:text-lg mb-4">{{ post.node.summary }}</div>
      </div>

      <pagination-posts
        v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
        :base="`/tag/${$page.tag.id}`"
        :totalPages="$page.tag.belongsTo.pageInfo.totalPages"
        :currentPage="$page.tag.belongsTo.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    content
    id
    belongsTo (page: $page, perPage: 10) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            date (format: "MMMM D, YYYY")
            path
            summary
            tags {
              title
              content
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from "../components/PaginationPosts";

export default {
  metaInfo() {
    return {
      title: "Tag: " + this.$page.tag.title
    };
  },
  components: {
    PaginationPosts
  }
};
</script>
