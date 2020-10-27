<template>
    <option type="radio" :value="target">{{ text }}</option>
</template>
<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class AppSelectBoxListItem extends Vue {
    @Prop() public text!: string;
    @Prop() public target!: string;
}
</script>
