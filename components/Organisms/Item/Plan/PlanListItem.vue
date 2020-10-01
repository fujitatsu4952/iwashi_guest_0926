<template>
    <div>
        <div>{{ planMast.name }}</div>
        <div>{{ planMast.description }}</div>
        <div>{{ planMast.subDescription }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "nuxt-property-decorator";
import { PlanMast, PolicyMast } from "@/entity/type";

@Component({
    components: {},
})
export default class PlanListItem extends Vue {
    @Prop() public planMast!: PlanMast;
}
</script>
<style scoped lang="stylus"></style>
