<template>
    <div :class="Mode" class="text_h1" v-html="value"></div>
</template>

<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class AppTextH1 extends Vue {
    @Prop() public value!: string;
    @Prop({ default: false }) public white!: boolean;

    public get Mode() {
        if (this.white !== false) {
            return "white";
        }
    }
}
</script>

<style scoped lang="stylus">
.text_h1 {
    color: #000000;
    font-size: 22px;
    font-weight: bold;

    @media only screen and (min-width: 1023px) {
        font-size: 34px;
    }
}

.white {
    color: #ffffff;
}
</style>
