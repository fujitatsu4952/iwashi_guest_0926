<template>
    <div>
        <button @click="localVal = !localVal">
            <img src="~assets/img/label/check_agree.svg" v-if="localVal" />
            <img src="~assets/img/label/check_empty.svg" v-else />
        </button>
    </div>
</template>
<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Vue, Component, Prop, Emit } from "nuxt-property-decorator";

@Component({})
export default class AppToggleInput extends Vue {
    @Prop() public value!: boolean;
    @Emit() public input(val: boolean) {}
    public get localVal() {
        return this.value;
    }
    public set localVal(val: boolean) {
        this.input(val);
    }
}
</script>

<style lang="stylus" scoped>
button {
    width: auto;
    padding: 36% 20% 0 0;
    margin: 0;
    background: none;
    border: 0;
    font-size: 0;
    line-height: 0;
    overflow: visible;
    cursor: pointer;

    img {
        width: 12px;
    }
}
</style>
