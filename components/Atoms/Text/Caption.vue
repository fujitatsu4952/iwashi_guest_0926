<template>
    <div class="text_caption" :class="Mode" v-html="value"></div>
</template>

<script lang="ts">
// import { AsyncErrorHandle } from '@/abr/decorator';
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class AppTextCaption extends Vue {
    @Prop() public value!: string;
    @Prop({ default: false }) public bold!: boolean;
    @Prop({ default: false }) public white!: boolean;

    public get Mode() {
        if (this.bold !== false) {
            return "bold";
        } else if (this.white !== false) {
            return "white";
        }
    }
}
</script>

<style scoped lang="stylus">
.text_caption {
    color: #000000;
    font-size: 12px;
    white-space: pre-wrap;
}

.bold {
    font-weight: 600;
}

.white {
    color: #ffffff;
}
</style>
