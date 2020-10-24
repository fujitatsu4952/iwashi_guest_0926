<template>
  <div :class="Mode" class="text_hero" v-html="value"></div>
</template>

<script lang="ts">
// import { AsyncErrorHandle } from '@/abr/decorator';
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class AppTextHero extends Vue {
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
.text_hero {
    color: #000000;
    font-size: 24px;
    font-weight: bold;

    @media only screen and (min-width: 1023px) {
        font-size: 52px;
    }
}
.white {
    color: #ffffff;
}
</style>
