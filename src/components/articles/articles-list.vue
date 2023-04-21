<template>
  <section class="articles-section">
    <div class="wrapper">
      <div class="articles-list">
        <div class="articles p-1">
          <div class="articles-title"><h1>Tips & Best Pratices for Vue 3</h1></div>
          <div class="articles-categ">Vue</div>
          <div class="articles-date">2023</div>
          <div class="articles-overlay"></div>
        </div>
        <div class="articles p-2">
          <div class="articles-title"><h1>Simplify your JavaScript</h1></div>
          <div class="articles-categ">JavaScript</div>
          <div class="articles-date">2021</div>
          <div class="articles-overlay"></div>
        </div>
        <div class="articles p-3">
          <div class="articles-title"><h1>12 JavaScript Best Practices for Beginners</h1></div>
          <div class="articles-categ">JavaScript</div>
          <div class="articles-date">2020</div>
          <div class="articles-overlay"></div>
        </div>
      </div>
    </div>
    <div class="wrapper-btn">
      <custom-button />
    </div>
  </section>
</template>

<script>
  import CustomButton from "@/lib/custom-components/custom-button/custom-button.vue"

  export default {
    name: "ArticlesList",
    components: { CustomButton }
  }
</script>

<style scoped>
  .articles-title {
      width: 50%;
  }

  .articles-title h1 {
      font-weight: 300;
  }

  .articles-categ {
      width: 20%;
      font-weight: lighter;
  }

  .wrapper {
      width: 80%;
      margin: 100px 180px 0;
      height: 20%;
  }

  .wrapper-btn {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .articles {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-basis: 1;
      position: relative;
      z-index: 2;
      color: white;
      mix-blend-mode: difference;
  }

  .articles-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
  }
</style>
