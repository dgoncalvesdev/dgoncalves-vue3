<template>
  <div class="page-content-wrapper">
    <intro />
  </div>
</template>

<script>
  import Intro from "@/components/intro/intro.vue"

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Hero",
    components: { Intro }
  }
</script>

<style>
  .page-content-wrapper {
      overflow: hidden;
  }
</style>
