<template>
    <div>
        <div>{{ dayOfWeek }}</div>
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

<style lang="stylus" scopend></style>
