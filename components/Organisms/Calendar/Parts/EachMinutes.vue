<template>
    <div @click="selectMinutes(minutes)">
        <div>{{ minutes }}</div>
        <div v-if="onTime">●</div>
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
@Component({})
export default class EachMinutes extends Vue {
    @Prop() public minutes!: Scalars["AWSDate"];
    @Prop() public selectedMinutes!: Scalars["AWSDate"][];
    @Emit("selectMinutes") public selectMinutes(minutes: Scalars["AWSDate"]) {}

    public get onTime() {
        if (this.selectedMinutes.indexOf(this.minutes) != -1) {
            return true;
        } else {
            return false;
        }
    }
}
</script>

<style lang="stylus" scopend></style>
