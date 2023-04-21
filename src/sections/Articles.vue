<template>
  <section class="articles-section">
    <div class="articles-marquee">
      <simple-marquee
        type="articles"
        animation="scroll"
      />
    </div>

    <div class="articles-list">
      <articles-list />
    </div>
  </section>
</template>

<script>
  import SimpleMarquee from "@/lib/custom-components/simple-marquee/simple-marquee.vue"
  import ArticlesList from "@/components/articles/articles-list.vue"

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Articles",
    components: { ArticlesList, SimpleMarquee },
    data() {
      return {
        title: 'Software Developer',
        subTitle: 'Frontend addicted'
      }
    }
  }
</script>

<style scoped>
  .articles-section {
      padding-top: 5vh;
      width: 100vw;
      height: 120vh;
      overflow: hidden;
  }
</style>
