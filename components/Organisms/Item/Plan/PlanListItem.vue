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
import { BookingPageMixin } from "@/mixins/bookingMixin";
import { coordinator } from "@/abr/index";

@Component({
    components: {}
})
export default class PlanListItem extends BookingPageMixin {
    @Prop() public planMast!: PlanMast;

    public created() {
        return super.start();
    }

    public getPlan() {
        console.log("プラン取得");
        if (this.reservationObject) {
            console.log("getplan");
            this.reservationObject.planID = this.planMast.planID;
            coordinator.updateReservation(this.reservationObject);
        }
    }
}
</script>
<style scoped lang="stylus"></style>
