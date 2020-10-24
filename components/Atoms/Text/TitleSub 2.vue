<template>
  <div class="text_title_sub" :class="Mode" v-html="value" @click="click"></div>
</template>

<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";

@Component({})
export default class AppTextTitleSub extends Vue {
  @Prop() public value!: string;
  @Prop({ default: false }) public bold!: boolean;
  @Prop({ default: false }) public white!: boolean;
  @Prop({ default: false }) public whiteBold!: boolean;

  @Emit() click() {}

  public get Mode() {
    if (this.bold !== false) {
      return "bold";
    } else if (this.white !== false) {
      return "white";
    } else if (this.whiteBold !== false) {
      return "whiteBold";
    }
  }
}
</script>

<style scoped lang="stylus">
.text_title_sub {
    margin: 10px 0 0 0;
    color: #000000;
    font-size: 18px;

    @media only screen and (max-width: 1023px) {
        font-size: 16px;
    }
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
