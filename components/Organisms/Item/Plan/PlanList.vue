<template>
    <div v-if="planMasts">
        <div v-for="planMast in planMasts" :key="planMast.planID">
            <plan-list-item :planMast="planMast" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "nuxt-property-decorator";
import { PlanMast } from "iwashi_abr_1023/iwashiabr";

import PlanListItem from "./PlanListItem.vue";
@Component({
    components: { PlanListItem }
})
export default class PlanList extends Vue {
    @Prop() public planMasts: PlanMast[] | null | undefined;
}
</script>
<style scoped lang="stylus"></style>
