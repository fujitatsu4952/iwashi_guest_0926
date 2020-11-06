<template>
    <week-days @selectMinutes="selectMinutes" />
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";
import {
    // ReservationCoordinatorInteractor,
    Scalars,
    getTimeRangeArray,
    ReservationObject
} from "iwashi_abr_1023/iwashiabr";
import dayjs from "dayjs";
import { coordinator } from "@/abr/index";
// mixin
import { BookingPageMixin } from "@/mixins/bookingMixin";
// Component
import WeekDays from "./Parts/EachWeek.vue";

@Component({
    components: {
        WeekDays
    }
})
export default class ReadCalendar extends BookingPageMixin {
    public async selectMinutes(minutes: Scalars["AWSDate"]) {
        let reservationEndAt = dayjs(minutes)
            .add(1.5, "hour")
            .format("YYYY-MM-DD-HH:mm");
        let reservationTime = getTimeRangeArray(minutes, reservationEndAt);
        if (this.reservationObjectNow) {
            const reservationObjectTemp: ReservationObject = {
                ...this.reservationObjectNow,
                checkInTime: minutes,
                checkOutTime: reservationEndAt
            };
            await coordinator.updateReservation(reservationObjectTemp);
        }
    }
}
</script>
