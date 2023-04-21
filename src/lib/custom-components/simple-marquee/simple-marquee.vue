<template>
  <div
    ref="marquee"
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
        default: 'onHover'
      }
    },
    mounted() {
      if (this.animation === 'scroll') window.addEventListener('scroll', this.updateMarqueePosition)
    },
    beforeUnmount() {
      if (this.animation === 'scroll') window.removeEventListener('scroll', this.updateMarqueePosition)
    },
    methods: {
      getMarqueeText() {
        return (this.type + ' - ').repeat(60)
      },
      updateMarqueePosition() {
        const marquee = this.$refs.marquee
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        marquee.style.transform = `translateX(-${ scrollTop }px)`
      }
    }
  }
</script>

<style lang="scss">

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
  }

  .marquee-onHover span {
    font-size: 6em;
  }

  .marquee-onHover span:hover {
    animation: marquee-animation 80s linear infinite;
    background-color: $dark-brown;
    color: $light-brown;
    font-size: 6em;
    font-style: italic;
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
