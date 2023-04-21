<template>
  <nav
    id="navbar"
    class=""
  >
    <div class="nav-wrapper">
      <div class="logo">
        <span>Diogo Gonçalves | Lisbon</span>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/no-reserved-component-names,vue/multi-word-component-names
    name: "NavBar"
  }
</script>

<style lang="scss">
  #navbar {
    background: $light-brown;
    color: $dark-brown;
    border-bottom: 1px solid $dark-brown;
    position: fixed;
    top: 0;
    height: 60px;
    line-height: 60px;
    width: 100vw;
    z-index: 10;
  }
</style>
