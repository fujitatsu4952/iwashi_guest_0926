<template>
    <div class="wrapper">
        <button
            :class="grayMode"
            class="secondary-button"
            @click="click"
            :disabled="disabled"
        >
            {{ statement }}
        </button>
    </div>
</template>
<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator";

@Component({})
export default class SecondaryButton extends Vue {
    @Prop({ required: true }) public statement!: String;
    @Prop() public disabled!: boolean;
    @Prop({ default: false }) public gray?: boolean;
    @Emit() public click() {}

    public get grayMode() {
        if (this.gray !== false) {
            return "gray";
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper {
    text-align: center;

    .secondary-button {
        width: 100%;
        background-color: #ffffff;
        color: rgba( 0, 0, 0, 0.5);
        font-size: 16px;
        padding: 12px 0;
        border: 1px solid #dddddd;
        border-radius: 100px;
        cursor: pointer;

        &:disabled {
            color: alpha($primaryColor, 0.3);
            border: 1px solid alpha($primaryColor, 0.3);
        }
    }

    .gray {
        color: $grayText;
        border: 1px solid $grayText;
    }
}
</style>
