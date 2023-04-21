<template>
  <div class="hero-wrapper">
    <div class="hero__intro">
      <div class="hero__top-section">
        <div class="hero__top-section--text">
          <span class="info-head-text">{{ info.role }}</span>
          <h2 class="info-text">{{ info.roleInfo }}</h2>
        </div>
      </div>

      <div class="hero__middle-section">
        <div class="hero__middle-section--img">
          <div class="hero__middle-section--img-eyes">
            <div class="eye left">
              <div class="pupil" />
            </div>
            <div class="eye right">
              <div class="pupil" />
            </div>
          </div>
          <img
            src="@/assets/images/intro/inner-child.jpg"
            alt=""
          >
        </div>
      </div>

      <!--      <div class="hero__bottom-section"> -->
      <!--        <div class="hero__bottom-section&#45;&#45;text"> -->
      <!--          <h2 class="info-text">{{ info.subTitle }}</h2> -->
      <!--          <span class="info-head-text">{{ info.title }}</span> -->
      <!--        </div> -->
      <!--      </div> -->
    </div>
  </div>
</template>

<script>
  import gsap from "gsap"

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Intro",
    data() {
      return {
        info: {
          role: 'Creative Developer',
          roleInfo: 'Frontend addicted',
          title: 'Software Developer',
          subTitle: 'Full stack capable'
        }
      }
    },
    mounted() {

      this.animateText()

      this.animateImage()

      this.$nextTick(() => {
        document.querySelector('body')
          .removeAttribute('overflowHidden')
      })

      this.movingEyes()

    },
    methods: {
      animateText() {
        gsap.to(".hero__top-section--text", {
          duration: 1,
          left: "5vw",
          ease: "power4.out",
          delay: 1,
          stagger: {
            amount:0.5
          }
        })

        gsap.to(".hero__bottom-section--text", {
          duration: 1,
          bottom: "5vh",
          ease: "power4.out",
          delay: 1,
          stagger: {
            amount:0.5
          }
        })
      },
      animateImage() {
        gsap.to(".hero__middle-section--img", {
          duration: 0.1,
          opacity: 1,
          delay: 2
        })
      },
      movingEyes() {
        const pupils = Array.from(document.querySelectorAll('.pupil')),
              centerX = window.innerWidth / 2,
              centerY = window.innerHeight / 2

        document.addEventListener('mousemove', e => {
          const lookAtX = (65 / centerX) * (e.clientX - centerX),
                lookAtY = (65 / centerY) * (e.clientY - centerY)

          pupils.forEach(p => p.style.transform = `translate(${ lookAtX }%, ${ lookAtY }%)`)
        })
      }
    }
  }
</script>

<style lang="scss">
  .hero-wrapper {
      width: 100vw;
      overflow: hidden;
      height: 100vh;
  }

  .hero {
      &__intro {
          display: flex;
          flex-direction: column;
          margin-bottom: 5vh;
          margin-top: 10vh;
      }

      &__top-section {
        height: 20vh;

        &--text {
          left: -100%;
          width: 40%;
          position: absolute;
        }
      }

      &__middle-section {
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;

        &--img {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;

          img {
            width: 40%;
          }
        }

        &--img-eyes {
          position: absolute;
          margin: 0 3em 8em 0;
        }
      }

      &__bottom-section {
        height: 20vh;

        &--text {
          bottom: -100%;
          width: 15%;
          position: absolute;
          right: 5vw;
        }
      }
  }

  span.info-head-text {
    font-family: "Space Grotesk Medium", sans-serif;
    font-weight: 600;
    font-size: 3em;
    text-transform: uppercase;
    overflow-wrap: break-word;
  }

  h2.info-text {
    font-size: 1em;
    font-style: italic;
  }

  h2.info-text:before {
    content: "-";
    margin-right: 4%;
  }

  .eye {
    background: $grey;
    position: relative;
    display: inline-block;
    border-radius: 50%;
    height: 20px;
    width: 20px;
  }

  .left {
    margin-right: 3px;
  }

  .pupil {
    width: 10px;
    height: 10px;
    background: #111;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 5px);
    bottom: calc(50% - 7px);
  }


</style>
