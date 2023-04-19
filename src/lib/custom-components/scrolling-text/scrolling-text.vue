<template>
    <div class="scrolling-text-wrapper">
        <p>{{text}}</p>
    </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
export default defineComponent({
    name: 'ScrollingText',
    props: {
        text: String
    }
})

</script>
