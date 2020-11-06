<template>
    <div class="each_week">
        <div @click="beforeWeek">←</div>
        <div v-if="weekDates" class="week_days_container">
            <div class="week_days" v-for="date in weekDates" :key="date">
                <each-date
                    :date="date"
                    @selectMinutes="selectMinutes"
                    :selectedMinutes="selectedMinutes"
                />
            </div>
        </div>
        <div @click="nextWeek">→</div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";
import {
    DayOfTheWeek,
    getDateRangeArray,
    Scalars,
    getDayOfTheWeek,
    getTimeRangeArray
} from "iwashi_abr_1023/iwashiabr";
import dayjs from "dayjs";
// components
import EachDate from "./EachDay.vue";
@Component({
    components: {
        EachDate
    }
})
export default class eachWeekDays extends Vue {
    public startDate: Scalars["AWSDate"] | null = null;
    public weekDates: Scalars["AWSDate"][] | null = null;
    public selectedMinutes: Scalars["AWSDate"][] = [];
    public readonly DAY_OF_THE_WEEKS: DayOfTheWeek[] = [
        DayOfTheWeek.Sun,
        DayOfTheWeek.Mon,
        DayOfTheWeek.Tue,
        DayOfTheWeek.Wed,
        DayOfTheWeek.Thu,
        DayOfTheWeek.Fri,
        DayOfTheWeek.Sat
    ];
    public created() {
        let today = dayjs(new Date()).format("YYYY-MM-DD");
        this.startDate = today;
        let lastDay = dayjs(today)
            .add(6, "day")
            .format("YYYY-MM-DD");
        this.weekDates = getDateRangeArray(today, lastDay);
    }

    public nextWeek() {
        if (this.startDate) {
            this.startDate = dayjs(this.startDate)
                .add(6, "day")
                .format("YYYY-MM-DD");
            let lastDay = dayjs(this.startDate)
                .add(6, "day")
                .format("YYYY-MM-DD");
            this.weekDates = getDateRangeArray(this.startDate, lastDay);
        }
    }
    public beforeWeek() {
        if (this.startDate) {
            this.startDate = dayjs(this.startDate)
                .add(-6, "day")
                .format("YYYY-MM-DD");
            let lastDay = dayjs(this.startDate)
                .add(6, "day")
                .format("YYYY-MM-DD");
            this.weekDates = getDateRangeArray(this.startDate, lastDay);
        }
    }
    @Emit("selectMinutes") public selectMinutes(minutes: Scalars["AWSDate"]) {
        let reservationEndAt = dayjs(minutes)
            .add(1.5, "hour")
            .format("YYYY-MM-DD-HH:mm");
        this.selectedMinutes = getTimeRangeArray(minutes, reservationEndAt);
    }
}
</script>

<style lang="stylus" scopend>
.each_week {
    display: flex
    justify-content: space-evenly

    .week_days_container {
        display: flex;
        .week_days {
            margin: 0 5px;
            border: 1px solid $boundaryBlack
        }
    }
}
</style>
