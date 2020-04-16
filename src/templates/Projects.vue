<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h1 class="text-4xl font-bold leading-tight">Current Projects</h1>

      <p class="mb-12">
        The following is a current list of projects managed by the
        <a href="/manual/organizing-committee/">Organizing Committee.</a>
      </p>
      <p>Last updated: {{ $context.today | luxon:format('EEEE, MMMM d')}}</p>

      <div
        v-for="project in $page.projects.edges"
        :key="project.id"
        class="post border-gray-400 border-b pb-6 mb-6"
      >
        <h2 class="text-xl md:text-2xl font-bold mb-0">
          {{ project.node.name }}
        </h2>
        <div v-html="project.node.notes" class="markdown-body mb-2 pb-4" />
        {{
          project.node.end && project.node.start
            ? `starts ${project.node.start}`
            : ""
        }}
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Projects {
  projects: allProject(
    sortBy: "Start"
    order: ASC
  ) {
    edges {
      node {
        name
        notes
        start(format: "MMMM YYYY")
        end(format: "MMMM YYYY")
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
export default {
  data() {
    return {
      today: this.$today,
    };
  },
  metaInfo: {
    title: "DMG Programs Index",
  },
};
</script>
