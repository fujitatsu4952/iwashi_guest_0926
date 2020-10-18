<template>
    <button @click="click" class="flex">
        <p v-if="black === ''" class="transition_button_black">
            {{ statement }}
        </p>
        <p v-else class="transition_button">{{ statement }}</p>
        <img
            v-if="arrow !== false"
            src="~/assets/img/arrow/arrow-right.svg"
            alt="details"
        />
        <!-- <img v-if="square !== false" src="~/assets/img/label/plan-label.svg" alt /> -->
    </button>
</template>
<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator";

@Component({})
export default class TransitionButton extends Vue {
    @Prop({ required: true }) public statement!: string;
    @Prop() public black?: String;
    @Prop({ default: false }) public arrow!: boolean;
    @Prop({ default: false }) public square!: boolean;
    @Emit() public click() {}
}
</script>
<style lang="stylus" scoped>
.transition_button {
    cursor: pointer;
    font-size: $defaultFontSize;
    color: $noticebleFontColor;
    padding-right: 0.5em;
}

.transition_button_black {
    cursor: pointer;
    font-size: $defaultFontSize;
    padding-right: 0.5em;
}
</style>
