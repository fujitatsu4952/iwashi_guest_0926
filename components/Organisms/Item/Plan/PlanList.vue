<template>
    <div v-if="planMasts">
        <div v-for="planMast in planMasts" :key="planMast.planID">
            <plan-list-item :planMast="planMast" @getPlan="getPlan" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "nuxt-property-decorator";
import { PlanMast, ReservationObject } from "iwashi_abr_1023/iwashiabr";
import { coordinator } from "@/abr/index";
// mixin
import { BookingPageMixin } from "@/mixins/bookingMixin";
// components
import PlanListItem from "./PlanListItem.vue";

interface reservationPlanItemTemp {
    planID: string;
    planNum: number;
}
@Component({
    components: { PlanListItem }
})
export default class PlanList extends BookingPageMixin {
    @Prop() public planMasts: PlanMast[] | null | undefined;
    public reservationPlanListTemp: reservationPlanItemTemp[] = [];

    public async getPlan(reservationPlanItemTemp: reservationPlanItemTemp) {
        //　ダブリがあればそのプランの個数だけ更新
        let duplicateTarget:
            | reservationPlanItemTemp
            | undefined = this.reservationPlanListTemp.find(item => {
            return item.planID === reservationPlanItemTemp.planID;
        });
        if (!duplicateTarget) {
            //　初見
            this.reservationPlanListTemp.push(reservationPlanItemTemp);
        } else {
            duplicateTarget.planNum = reservationPlanItemTemp.planNum;
            // もし個数が0個のものがあれば消去する
            this.reservationPlanListTemp = this.reservationPlanListTemp.filter(
                item => {
                    return item.planNum !== 0;
                }
            );
        }
        if (this.reservationObjectNow) {
            const reservationObjectTemp: ReservationObject = {
                ...this.reservationObjectNow,
                planID: JSON.stringify(this.reservationPlanListTemp)
            };
            await coordinator.updateReservation(reservationObjectTemp);
        }
    }
}
</script>
<style scoped lang="stylus"></style>
