<template>
    <div @click="getPlan">
        <span>{{ planMast.planID }}</span>
        <span>NAME:{{ planMast.name }}</span>
        <span>説明:{{ planMast.description }}</span>
        <span>注意書き:{{ planMast.subDescription }}</span>
        <span>値段:{{ planMast.price }}</span>
        <span>在庫数:{{ planMast.stockNum }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "nuxt-property-decorator";
import { PlanMast } from "iwashi_abr_1023/iwashiabr";

@Component({
    components: {}
})
export default class PlanListItem extends Vue {
    @Prop() public planMast!: PlanMast;

    public getPlan() {
        console.log(this.planMast.planID);
    }
}
</script>
<style scoped lang="stylus"></style>
