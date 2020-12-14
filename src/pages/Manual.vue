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
            <g-link :to="post.node.path" class="post-link">{{
              post.node.title
            }}</g-link>
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

table {
  padding: 0;
}

table tr {
  border-top: 1px solid #cccccc;
  background-color: white;
  margin: 0;
  padding: 0;
}

table tr:nth-child(2n) {
  background-color: #f8f8f8;
}

table tr th {
  font-weight: bold;
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}

table tr td {
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}

table tr th :first-child,
table tr td :first-child {
  margin-top: 0;
}

table tr th :last-child,
table tr td :last-child {
  margin-bottom: 0;
}
</style>
<script>
import PaginationPosts from "../components/PaginationPosts";

export default {
  metaInfo: {
    title: "DMG Manual Index",
  },
  components: {
    PaginationPosts,
  },
};
</script>
