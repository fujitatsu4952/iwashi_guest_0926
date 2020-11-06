<template>
    <div class="each_day">
        <div class="each_day_date">
            {{
                date
                    .split("-")
                    .splice(1, 2)
                    .join("/")
            }}
        </div>
        <div class="each_day_of_week">{{ dayOfWeek }}</div>
        <div v-for="minute in dateMinutes" :key="minute">
            <each-minutes
                :minutes="minute"
                @selectMinutes="selectMinutes"
                :selectedMinutes="selectedMinutes"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";
import {
    DayOfTheWeek,
    getDateRangeArray,
    getDateTimeRangeArray,
    getTimeRangeArray,
    Scalars,
    getDayOfTheWeek
} from "iwashi_abr_1023/iwashiabr";
import dayjs from "dayjs";
// components
import EachMinutes from "./EachMinutes.vue";
@Component({
    components: {
        EachMinutes
    }
})
export default class weekDays extends Vue {
    @Prop() public date!: Scalars["AWSDate"];
    @Prop() public selectedMinutes!: Scalars["AWSDate"][];
    public get dateMinutes() {
        let startAt = dayjs(this.date)
            .add(12, "hour")
            .format("YYYY-MM-DD-HH:mm");
        let endAt = dayjs(this.date)
            .add(23, "hour")
            .format("YYYY-MM-DD-HH:mm");
        return getTimeRangeArray(startAt, endAt);
    }
    public get dayOfWeek() {
        return getDayOfTheWeek(this.date);
    }
    @Emit("selectMinutes") public selectMinutes(minutes: Scalars["AWSDate"]) {}
}
</script>

<style lang="stylus" scopend>
.each_day {
    width: 80px;
    cursor: pointer;
    .each_day_date {
        text-align: center;
    }
    .each_day_of_week {
        text-align: center;
    }
}
</style>
