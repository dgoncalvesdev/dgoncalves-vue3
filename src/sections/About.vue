<template>
  <section class="about-section">
    <div class="about-marquee">
      <simple-marquee type="about" />
    </div>

    <div class="about-intro">
      <div class="about-intro__text">
        <h1>PROFILE</h1>
        <div class="about-intro__text--text">
          <span>{{ x }}</span>
        </div>
        <div class="about-intro__text--btn">
          <custom-button />
        </div>
      </div>
      <div class="about-intro__img">
        <distortion-image />
      </div>
    </div>
  </section>
</template>

<script>
  import DistortionImage from "@/lib/custom-components/distortion-image/distortion-image.vue"
  import SimpleMarquee from "@/lib/custom-components/simple-marquee/simple-marquee.vue"
  import CustomButton from "@/lib/custom-components/custom-button/custom-button.vue"
  import gsap from "gsap"

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "About",
    components: { CustomButton, SimpleMarquee, DistortionImage },
    data() {
      return {
        purpose: {
          title: '"A small intro"',
          keys: 'HEY, I\'M A UI/UX DESIGNER AND WEB DEVELOPER. I LOVE BUILDING NICE EXPERIENCES FOR STARTUPS & AGENCIES.'
        },
        x: 'Over the years I have spent time converting designs into pixel-perfect, performant,accessible and responsive applications/websites.I have always been excited about the entire development spectrum,so I frequently engage in backend.Well what can I say,I sincerely simply love working on ambitious projects with positive people in a conducive work environment.'
      }
    },
    mounted() {
      gsap.to(".about-intro__text--btn", {
        duration: 1,
        left: "5vw",
        ease: "power4.easeIn",
        stagger: 0.25,
        delay: 0.2
      })
    }
  }
</script>

<style lang="scss">
  .about-section {
    padding-top: 5vh;
    width: 100vw;
    height: 130vh;
    overflow: hidden;
  }

  .about-marquee {
    width: 100vw;
    height: 10vh;
  }

  .about-intro {
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10em 5em 5em 5em;

    &__text {
      width: 50vw;

      &--text {
        width: 35vw;
        font-size: .35em;

        > span {
          font-family: "Space Grotesk Light", sans-serif;
          font-size: 3.5em;
        }
      }

      &--btn {
        margin-top: 5%;
        position: absolute;
        left: -100%;
        transition: all 0.3s ease-in-out;
      }

      > h1 {
        font-family: "Space Grotesk Medium", sans-serif;
        text-transform: uppercase;
        font-style: italic;
      }
    }

    &__img {
      width: 50vw;

      > img {
        width: 50%;
      }
    }
  }
</style>
