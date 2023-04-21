<template>
  <intro-layout v-show="userStore.isUserFirstEntrance" />

  <div
    v-if="!userStore.isUserFirstEntrance"
    class="home-wrapper"
  >
    <nav-bar />
    <hero />
    <about />
    <articles />
    <contact />
    <custom-footer />
  </div>
</template>

<script lang="ts">
  import IntroLayout from "@/layout/intro-layout.vue"
  import Hero from "@/sections/Hero.vue"
  import About from "@/sections/About.vue"
  import Articles from "@/sections/Articles.vue"

  import { useUserStore } from "@/stores/userSession"
  import { defineComponent } from "vue"
  import NavBar from "@/components/nav/navbar.vue"
  import CustomFooter from "@/sections/Footer.vue"
  import Contact from "@/sections/Contact.vue"
  export default defineComponent({
    name: "HomeView",
    components: { Contact, CustomFooter, NavBar, Articles, About, Hero, IntroLayout },
    setup() {
      const userStore = useUserStore()
      return { userStore }
    }
  })
</script>

<style lang="scss" scoped>
  .home-wrapper {
    overflow-x: hidden;
  }
</style>
