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
    public async register() {
        if (this.reservationObjectNow) {
            console.log(this.reservationObjectNow);
            await reservationInteractor.addMast(this.reservationObjectNow);
            this.$router.push({
                name: "booking-reservationID",
                params: {
                    reservationID: this.reservationObjectNow.reservationID
                }
            });
        }
    }
}
</script>
<style scoped lang="stylus"></style>
