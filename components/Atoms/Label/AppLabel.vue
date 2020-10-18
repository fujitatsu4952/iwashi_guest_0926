<template>
  <div class="app_label" :class="Mode">
    <div class="app_label_inner">
      {{ value }}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class Label extends Vue {
  @Prop() value!: string;
  @Prop({ default: false }) public black!: boolean;
  @Prop({ default: false }) public gray!: boolean;

  public get Mode() {
    if (this.black !== false) {
      return "black";
    } else if (this.gray !== false) {
      return "gray";
    }
  }
}
</script>

<style lang="stylus">
.app_label {
    width: 72px;
    font-size: 12px;
    text-align: center;

    .app_label_inner {
        padding: 3px 4px;
    }
}
.black {
    background-color: black;
    color: white;
}
.gray {
    background-color: #979797;
    color: black;
}
</style>
