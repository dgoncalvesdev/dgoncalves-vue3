<template>
  <section class="footer-section">
    <div class="row">
      <div class="column">
        <h2>This portfolio was developed by Diogo Gonçalves.</h2>
        <p>Made from Lisbon 🇵🇹</p>
      </div>
      <div class="column">
        <h2>Column 2</h2>
        <p>Some text..</p>
      </div>
      <div class="column">
        <h2>Column 3</h2>
        <p>Some text..</p>
      </div>
      <div class="column">
        <h2>Column 4</h2>
        <p>Some text..</p>
      </div>
    </div>
    <div class="row marquee">
      <simple-marquee type="back to top" />
    </div>
  </section>
</template>

<script>
  import SimpleMarquee from "@/lib/custom-components/simple-marquee/simple-marquee.vue";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "CustomFooter",
    components: { SimpleMarquee }
  }
</script>

<style lang="scss" scoped>
  .footer-section {
    padding-top: 5vh;
    width: 100vw;
    height: 35vh;
    overflow: hidden;
  }

  .column {
    float: left;
    width: 25%;
    padding: 10px;
    height: 20vh;
    border-top: 1px solid $dark-brown;
    border-bottom: 1px solid $dark-brown;
    border-right: 1px solid $dark-brown;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .marquee {
    height: 10vh;
  }

  h2 , p {
    font-size: .8em;
  }
</style>
