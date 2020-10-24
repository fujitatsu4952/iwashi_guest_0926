<template>
    <div class="text_h2" v-html="value"></div>
</template>

<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class AppTextH2 extends Vue {
    @Prop() public value!: string;
}
</script>

<style scoped lang="stylus">
.text_h2 {
    color: #000000;
    font-size: 20px;
    font-weight: bold;

    @media only screen and (min-width: 1023px) {
        font-size: 24px;
    }
}
</style>
