<template>
    <div class="large_button_container">
        <button
            class="large_button"
            :class="Mode"
            @click="click"
            :disabled="disabled"
        >
            <p class="large_button_statement">{{ statement }}</p>
        </button>
    </div>
</template>
<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator";

@Component({})
export default class LargeButton extends Vue {
    @Prop({ required: true }) public statement!: String;
    @Prop() public disabled!: boolean;
    @Prop({ default: false }) public gray?: boolean;

    @Emit() public click() {}

    public get Mode() {
        if (this.gray !== false) {
            return "gray";
        }
    }
}
</script>
<style lang="stylus" scoped>
.large_button_container {
    display: inline-block;
    margin: 0 auto;

    .large_button {
        @extend $button_primary_base;
        min-width: 315px;
        padding: 12px 0;

        @media only screen and (max-width: 1023px) {
            min-width: 285px;
        }

        .large_button_statement {
            font-size: 16px;
        }
    }

    .gray {
        background-color: $boundaryBlack;
        color: #000;
    }
}
</style>
