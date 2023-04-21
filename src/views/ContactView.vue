<template>
  <div class="about">
    <div class="container">
      <div class="row row-1 border-bottom">
        <div class="brand-name flex-center border-right">
          <div class="header">
            CONTACT ME
          </div>
        </div>

        <div class="brand-contact flex-center">
          <div class="contact-container">
            <p>sunday</p>
            <p>sunday</p>
            <p>sunday</p>
          </div>
        </div>
      </div>

      <div class="row row-2 border-bottom">
        <div class="hero-copy border-right">
          <div class="i-row i-row1">
            <div class="col projects">
              <div class="project-list">
                <p>ewerererer</p>
                <p>ewerererer</p>
                <p>ewerererer</p>
                <p>ewerererer</p>
                <p>ewerererer</p>
                <p>ewerererer</p>
              </div>
              <div class="h-stripe"><span>303_hr</span></div>
            </div>

            <div class="col circle-text flex-center">
              <div class="text">
                sdd
              </div>
            </div>
          </div>

          <div class="i-row i-row2">
            <div class="col lets-talk flex-center">
              <p>Let's talk <span>mixing</span></p>
            </div>
            <div class="col stripe">
              <div class="line" />
            </div>
          </div>
        </div>

        <div class="hero-img">
          <div class="img-container border-right">
            <div class="box" />
            <div>
              <img
                src="@/assets/images/about/me_front.png"
                class="image"
                alt=""
              >
            </div>
          </div>

          <div class="empty-rows">
            <div class="white-space border-bottom" />
            <div class="white-space" />
          </div>
        </div>
      </div>

      <div class="marquee">
        <span>
          &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; /
        </span>
      </div>
    </div>
  </div>
</template>

<script>

  import gsap from "gsap"

  export default {
    name: "ContactView",
    mounted() {
      gsap.to(".row-1, .row-2", {
        duration: 1,
        top:0,
        ease: "power4.out",
        delay: 1,
        stagger: {
          amount:0.5
        }
      })

      gsap.to(".brand-name", {
        duration: 1,
        left: 0,
        ease: "power4.out",
        delay: 2.5,
        stagger: {
          amount:0.5
        }
      })

      gsap.to(".lets-talk p", {
        duration: 0.1,
        opacity: 1,
        ease: "power4.out",
        delay: 2
      })

      gsap.to(".text", {
        duration: 2,
        scale: 0,
        ease: "power4.out",
        delay: 2
      })

      gsap.to(".text", {
        duration: 20,
        rotation: 360,
        ease: "Linear.easeNone",
        repeat: -1
      })

      gsap.to(".box", {
        duration: 1,
        top: "100%",
        ease: "power4.out",
        delay: 2
      })

      gsap.to(".h1, p", {
        duration: 1,
        top: 0,
        ease: "power4.out",
        delay: 2,
        stagger: {
          amount:0.5
        }
      })
      gsap.to(".line", {
        duration: 1,
        scaleX: 1,
        ease: "power4.easeIn",
        delay: 3.5
      })
    }
  }
</script>

<style lang="scss">
  div.about {
    overflow: hidden;
    background: #0e1012;
  }

  .container {
    width: 100%;
    height: 90vh;
  }

  p {
    color: white;
    text-align: left;
    font-size: 1.5rem;
    line-height: 1.5;
  }

  .row {
    color: #0e1012;
  }

  .border-right {
    border-right: 2px solid black;
  }

  .border-bottom {
    border-bottom: 2px solid black;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row-1 {
    position: relative;
    top: -100%;
    width: 100%;
    height: 30vh;
    display: flex;
    background-color: $creme;
    z-index: 2;
  }

  .brand-name {
    position: relative;
    left: -100%;
    flex: 5;
  }

  .brand-name .header h1 {
    font-weight: 800;
    font-size: 8rem;
    text-transform: uppercase;
  }

  .brand-contact {
    position: relative;
    left: -4rem;
    flex-direction: column;
    flex: 2;
  }

  .row-2 {
    position: relative;
    width: 100%;
    height: 60vh;
    display: flex;
    z-index: 0;
  }

  .hero-copy {
    flex: 5;
  }

  .hero-img {
    flex: 2;
  }

  .img-container {
    position: relative;
    overflow: hidden;
    flex: 3;
    height: 100%;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .box {
    background-color: $creme;
    opacity: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
  }

  .empty-rows {
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: $creme;
  }

  .white-space {
    width: 100%;
  }

  .white-space:nth-child(1) {
    flex: 3;
  }
  .white-space:nth-child(2) {
    flex: 2;
  }

  .row-2 {
    position: relative;
    top: -100%;
  }

  .hero-copy {
    display: flex;
    flex-direction: column;
  }

  .i-row {
    width: 100%;
    display: flex;
  }

  .i-row > col {
    background-color: $creme;
  }

  .i-row1 {
    flex:3;
  }

  .i-row2 {
    flex:2;
  }

  .i-row .col:nth-child(1) {
    flex: 3;
  }

  .i-row .col:nth-child(2) {
    flex: 2;
  }

  .i-row1 .col:nth-child(1) {
    border-radius: 0 0 40px 0;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }

  .i-row1 .col:nth-child(2) {
    border-radius: 0 0 0 40px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
  }

  .i-row2 .col:nth-child(1) {
    border-radius: 0 40px 0 0;
    border-right: 1px solid black;
    border-top: 1px solid black;
  }

  .i-row2 .col:nth-child(2) {
    border-radius: 40px 0 0 0;
    border-left: 1px solid black;
    border-top: 1px solid black;
  }

  .projects {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .project-list {
    padding: 0 4em;
  }

  .h-stripe {
    position: absolute;
    padding: 1em;
    right: -8em;
    transform: rotate(-90deg);
    width: 100%;
    background: #0e1012;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .h-stripe span {
    position: relative;
  }

  .text {
    position: relative;
    text-transform: uppercase;
  }

  .lets-talk p {
    font-size: 3rem;
    opacity: 0;
  }

  .lets-talk p span {
    color: #0e1012;
    text-transform: uppercase;
  }

  .stripe {
    position: relative;
    overflow: hidden;
  }

  .line {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 2px;
    background: #0e1012;
  }

  .brand-name,
  .brand-contact {
    position: relative;
    overflow: hidden;
  }

  h1,
  p {
    position: relative;
    top: 400px;
  }

  .marquee {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.2rem 0;
    white-space: nowrap;
    overflow: hidden;
    z-index: 3;
    background: #0e1012;
    display: flex;
    align-items: center;
    height: 10vh;
  }

  .marquee span {
    text-transform: uppercase;
    font-weight: 400;
    color: white;
    font-size: 4em;
    padding-left: -10%;
    animation: marquee-animation 80s linear infinite;
  }

  @keyframes marquee-animation {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(-100%, 0);
    }

  }

  .col {
    background: $creme;
  }

</style>
