<template>
  <intro-layout/>
  <modern-layout/>
</template>

<script>
import IntroLayout from "@/layout/intro-layout.vue";
import ModernLayout from "@/layout/modern-layout.vue";

export default {
    name: "ModernSite",
    components: {ModernLayout, IntroLayout}
}
</script>

<style lang="scss">
</style>
