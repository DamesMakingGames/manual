<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div
        v-for="tag in $page.tags.edges"
        :key="tag.id"
        class="post border-gray-400 border-b pb-6 mb-6"
      >
        <h2 class="text-xl md:text-2xl font-bold mb-0">
          <g-link :to="tag.node.path">{{ tag.node.title }}</g-link>
        </h2>
        <ul>
          <li v-for="post in tag.node.belongsTo.edges" :key="post.id" class>
            <g-link :to="post.node.path" class="post-link">{{ post.node.title }}</g-link>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Dato {
  tags: allTag(sortBy: "title", order: ASC) {
    edges {
      node {
        title
        path
        belongsTo(sortBy: "title", order: ASC) {
          edges {
            node {
              ... on Post {
                id
                title
                summary
                path
              }
            }
          }
        }
      }
    }
  }
}

</page-query>
<style lang="postcss" scoped>
.post-link {
  @apply text-gray-800 font-normal leading-normal;
}
</style>
<script>
import PaginationPosts from "../components/PaginationPosts";

export default {
  metaInfo: {
    title: "DMG Manual Index"
  },
  components: {
    PaginationPosts
  }
};
</script>

