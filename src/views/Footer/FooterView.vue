<template>
    <div class="footer-wrapper">
      <div class="footer-wrapper__contact">
          <Contact/>
      </div>
      <div class="footer-wrapper__footer">
          <AppFooter/>
      </div>
    </div>
</template>

<script>

import ScrollingText from "@/lib/custom-components/scrolling-text/scrolling-text.vue";
import Contact from "@/components/contact/Contact.vue";
import AppFooter from "@/components/footer/AppFooter.vue";

export default {
    name: "FooterView",
    components: {AppFooter, Contact, ScrollingText},
}
</script>

<style lang="scss" scoped>
  .footer-wrapper {
    max-width: 100vw;
    max-height: 100vh;

    &__footer {
      margin-top: 2vh;
    }

  }

</style>
