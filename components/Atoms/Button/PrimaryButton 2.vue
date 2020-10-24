<template>
    <div class="wrapper">
        <button
            class="primary_button"
            :class="Mode"
            @click="click"
            :disabled="disabled"
        >
            <img
                v-if="present !== false"
                class="button_label"
                src="~assets/img/label/present_white.svg"
                alt="プレゼント"
            />
            <img
                v-else-if="ShoppingCart !== false"
                class="button_label"
                src="~assets/img/label/kurt-label.svg"
                alt="カート"
            />
            <p class="button_statement">{{ statement }}</p>
        </button>
    </div>
</template>
<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator";

@Component({})
export default class PrimaryButton extends Vue {
    @Prop({ default: false }) public ShoppingCart!: boolean;
    @Prop({ default: false }) public present!: boolean;
    @Prop({ required: true }) public statement!: String;
    @Prop() public disabled!: boolean;
    @Prop({ default: false }) public pink?: boolean;
    @Prop({ default: false }) public square?: boolean;
    @Prop({ default: false }) public pinkThin?: boolean;
    @Prop({ default: false }) public forGift?: boolean;
    @Prop({ default: false }) public white?: boolean;
    @Prop({ default: false }) public green?: boolean;

    @Emit() public click() {}

    public get Mode() {
        if (this.forGift !== false) {
            return "for_gift";
        } else if (this.square !== false) {
            return "pink square";
        } else if (this.pink !== false) {
            return "pink";
        } else if (this.pinkThin !== false) {
            return "pink thin";
        } else if (this.white !== false) {
            return "white";
        } else if (this.green !== false) {
            return "green";
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper {
    .primary_button {
        display: flex;
        width: 100%;
        background-color: #484848;
        color: #ffffff;
        text-align: center;
        font-size: 16px;
        padding: 12px 0;
        border-radius: 100px;
        justify-content: center;
        cursor: pointer;
        filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.8));

        &:disabled {
            display: none;
        }

        .button_label {
            padding-right: 3px;
            height: 25px;
        }

        .button_statement {
            letter-spacing: 1.5px;
        }
    }

    .for_gift {
        background: linear-gradient(-135deg, #efa071, #db808e);
        font-weight: 400;
    }

    .pink {
        background: linear-gradient(-135deg, #efa071, #db808e);
        padding: 20px 0px;
        font-weight: 600;
    }

    .square {
        border-radius: 0px;
    }

    .thin {
        padding: 10px 0px;
        font-weight: 500;
    }

    .white {
        background-color: #ffffff;
        color: #000000;
    }

    .green {
        background-color: #178471;
        padding: 12px 20px;
        border-radius: 0px;
    }
}
</style>
