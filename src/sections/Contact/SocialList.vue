<template>
  <section class="social-list">
    <div
      v-for="social in socials"
      class="social-links"
    >
      <span @click="openUrl('https://altsdigital.com/')">{{ social.network }}</span>
    </div>
  </section>
</template>

<script lang="ts">
  export default {
    name: "SocialList",
    data() {
      return {
        socials: [
          { network: 'Instagram', link: ''},
          { network: 'LinkedIn', link: ''},
          { network: 'Email', link: ''}
        ]
      }
    },
    methods: {
      openUrl(url : string) {
        window.open(url, '_blank')
      }
    }
  }
</script>

<style scoped>
  .social-list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 25vw;
  }

  span {
      font-family: "Space Grotesk Medium", sans-serif;
      font-size: 2em;
  }

  span:hover {
      cursor: pointer;
  }
</style>
