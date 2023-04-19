<template>
    <div class="circular-text-wrapper">
        <p id="circular-text-content">{{ text }}</p>
    </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
export default defineComponent({
    name: 'CircularText',
    props: {
        text: String
    },
    mounted() {
        const text = document.getElementById("circular-text-content")
        //@ts-ignore
        text.innerHTML = text?.innerText.split("").map(
            (char, i) =>
                `<span style="transform:rotate(${i * 9.2}deg)">${char}</span>`
        ).join("");
    }
})

</script>

<style lang="scss">
    .circular-text-wrapper {
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @keyframes effect {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    p.yolo {
        position: relative;
        width: 50%;
        height: 50%;
        animation: effect 8s linear infinite;
        font-size: 15px;
    }

    span.ef {
        position: absolute;
        left: 50%;
        display: block;
        transform-origin: 0 150px;
        text-transform: uppercase;
        font-weight: bold;
        color: #AFD4EE;
    }

</style>
