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
import { PlanMast, ReservationObject } from "iwashi_abr_1023/iwashiabr";
import { BookingPageMixin } from "@/mixins/bookingMixin";
import { coordinator } from "@/abr/index";

@Component({
    components: {}
})
export default class PlanListItem extends BookingPageMixin {
    @Prop() public planMast!: PlanMast;

    public async getPlan() {
        if (this.reservationObjectNow) {
            console.log("プラン取得");
            console.log(this.reservationObjectNow);
            const reservationObjectTemp: ReservationObject = {
                ...this.reservationObjectNow,
                planID: this.planMast.planID
            };
            console.log(reservationObjectTemp);
            await coordinator.updateReservation(reservationObjectTemp);
        }
    }
}
</script>
<style scoped lang="stylus"></style>
