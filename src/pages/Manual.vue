<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-xl md:text-2xl font-bold mb-0">
          <g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link>
        </h2>
        <div class="text-lg mb-4">{{ post.node.summary }}</div>
      </div>
      <!-- end post -->

      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/manual"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        path
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from "../components/PaginationPosts";

export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    PaginationPosts
  }
};
</script>

