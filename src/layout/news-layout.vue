<template>
    <div class="news-portfolio__layout">
    </div>
</template>

<script>
export default {
    name: "news-layout"
}
</script>

<style scoped>
    div.news-portfolio__layout {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        background-image: url('@/assets/images/ds.jpeg');
        background-position: 50% 50%;
        background-size: auto;
        opacity: .8;
    }
</style>
