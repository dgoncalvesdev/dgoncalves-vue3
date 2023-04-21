<template>
  <section class="contact-page">
    <div class="contact-page">
      <div class="contact-page__quick-info">{{ info.quickInfo }}</div>
      <div class="contact-page__contact-title">{{ info.title }}</div>
    </div>
    <div class="contact-page">
      <div class="contact-page__contact-title">{{ info.subTitle }}</div>
    </div>
  </section>
</template>

<script lang="ts">
  export default {
    name: "ContactPage",
    data() {
      return {
        info: {
          quickInfo: 'I\'m currently unavailable for freelance work,\n' +
            'but I always love hearing new some ideas and I\'m\n' +
            'more than happy to chat about anything.',
          title: 'REACH ME',
          subTitle: 'OUT ✺ ANY TIME'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.contact-page {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      width: 65vw;

    &__quick-info {
      width: 20vw;
      font-size: 1em;
    }

    &__contact-title {
      font-family: "Space Grotesk Medium", sans-serif;
      font-size: 10em;
    }
  }
</style>
