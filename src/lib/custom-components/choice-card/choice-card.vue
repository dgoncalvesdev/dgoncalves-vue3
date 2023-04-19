<template>
    <div class="choice-card-wrapper">
        <div class="choice-card-header">
            <p>a Enjoy trip.</p>
            <p>{{ text }}</p>
            <button/>
        </div>
        <div class="choice-card-body">
            <div class="pic"></div>
        </div>
    </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
export default defineComponent({
    name: 'ChoicesCard',
    props: {
        text: String
    },
    data () {

    },
    methods: {

    }
})

</script>
