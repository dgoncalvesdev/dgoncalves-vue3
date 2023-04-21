<template>
  <div
    class="marquee"
    :class="`marquee-${ animation }`"
  >
    <span> {{ getMarqueeText() }} </span>
  </div>
</template>

<script>
  export default {
    name: "SimpleMarquee",
    props: {
      type: {
        type: String,
        required: true
      },
      animation: {
        type: String,
        required: false,
        default: 'normal'
      }
    },
    methods: {
      getMarqueeText() {
        return (this.type + ' - ').repeat(60)
      }
    }
  }
</script>

<style lang="scss">
  .marquee-left {
    transform: rotate(5deg);
  }

  .marquee-right {
    transform: rotate(-5deg);
  }

  .marquee {
    width: 100%;
    margin: 0 auto;
    padding: 1em 0;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .marquee span {
    font-family: "Space Grotesk Medium", sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    mix-blend-mode: normal !important;
    font-size: 10em;
    padding-left: -10%;
    animation: marquee-animation 250s linear infinite;
  }

  @keyframes marquee-animation {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
</style>
