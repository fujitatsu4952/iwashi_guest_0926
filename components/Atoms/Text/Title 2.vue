<template>
  <div class="text_title" :class="Mode" v-html="value"></div>
</template>

<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class AppTextTitle extends Vue {
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
.text_title {
    color: #000000;
    font-size: 22px;
    font-weight: bold;

    @media only screen and (max-width: 1023px) {
        font-size: 18px;
    }
}

.white {
    color: #ffffff;
}
</style>
