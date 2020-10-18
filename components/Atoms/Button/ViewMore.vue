<template>
    <div class="arrow_container">
        <div class="arrow" @click="click"></div>
        <div class="arrow" @click="click"></div>
    </div>
</template>
<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator";

@Component({})
export default class ViewMore extends Vue {
    @Prop() public disabled!: boolean;
    @Prop({ default: false }) public white?: boolean;

    @Emit() public click() {}

    public get Mode() {
        if (this.white !== false) {
            return "white";
        }
    }
}
</script>
<style lang="stylus" scoped>
.arrow_container {
    display: inline-block;
    width: 14px;
    height: 12px
    .arrow{
        border-bottom: solid 2px #000000;
        border-right: solid 2px #000000;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
        margin: 0 0 -5px 0;
    }
}
</style>
