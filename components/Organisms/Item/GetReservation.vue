<template>
    <div>
        <app-button statement="予約をとる" @click="register" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import {
    reservationInteractor,
    coordinator,
    planStatusInteractor
} from "@/abr/index";
import {
    PlanMast,
    PlanStatus,
    ReservationObject,
    getTimeRangeArray,
    Scalars
} from "iwashi_abr_1023/iwashiabr";
// mixins
import { BookingPageMixin } from "@/mixins/bookingMixin";
// components
import AppButton from "@/components/Atoms/Button/LargeButton.vue";

interface reservationPlanItemTemp {
    planID: string;
    planNum: number;
}
@Component({
    components: {
        AppButton
    }
})
export default class BookingPage extends BookingPageMixin {
    public planStatusList: PlanStatus[] = [];
    public get dateMinutes(): Scalars["AWSDate"][] | undefined {
        if (this.reservationObjectNow) {
            return getTimeRangeArray(
                this.reservationObjectNow.checkInTime,
                this.reservationObjectNow.checkOutTime
            );
        }
    }

    public async register() {
        if (this.reservationObjectNow) {
            await this.stockUpdate();
            console.log(this.reservationObjectNow);
            await reservationInteractor.addMast(this.reservationObjectNow);
        }
    }

    public stockUpdate() {
        if (this.reservationObjectNow && this.dateMinutes) {
            const reservationPlan = JSON.parse(
                this.reservationObjectNow.planID
            ) as reservationPlanItemTemp[];
            for (let i = 0; i < this.dateMinutes.length; i++) {
                for (let m = 0; m < reservationPlan.length; m++) {
                    console.log(m);
                    let planStatus: PlanStatus = {
                        planID: reservationPlan[m].planID,
                        Time: this.dateMinutes[i],
                        soldNum: reservationPlan[m].planNum,
                        availableNum: null,
                        isAvailabe: null
                    };
                    this.planStatusList.push(planStatus);
                }
            }
            console.log(this.planStatusList);
            planStatusInteractor.updateStatus(this.planStatusList);
        }
    }
}
</script>
<style scoped lang="stylus"></style>
