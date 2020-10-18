<template>
  <div :class="Mode" class="text_text" v-html="value"></div>
</template>

<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class AppText extends Vue {
  @Prop() public value!: string;
  @Prop({ default: false }) public bold!: boolean;
  @Prop({ default: false }) public white!: boolean;
  @Prop({ default: false }) public whiteBold!: boolean;
  @Prop({ default: false }) public left!: boolean;

  public get Mode() {
    if (this.bold !== false) {
      return "bold";
    } else if (this.white !== false) {
      return "white";
    } else if (this.whiteBold !== false) {
      return "whiteBold";
    } else if (this.left !== false) {
      return "left";
    }
  }
}
</script>

<style scoped lang="stylus">
.text_text {
    color: #000000;
    font-size: 14px;
    white-space: pre-wrap;
}

.left {
    text-align: left;
}

.bold {
    font-weight: 600;
}

.white {
    color: #ffffff;
}

.whiteBold {
    color: #ffffff;
    font-weight: 600;
}
</style>
