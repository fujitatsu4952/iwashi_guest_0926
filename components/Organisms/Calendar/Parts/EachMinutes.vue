<template>
    <div @click="selectMinutes(minutes)" class="each_minute">
        <div :class="onTime ? 'each_minute_selected' : ''">
            {{ minutes.split("-").pop() }}
        </div>
        <div class="each_minute_selected_sign" v-if="onTime">○</div>
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

<style lang="stylus" scopend>
.each_minute {
    display: flex;
    .each_minute_selected {
        font-weight: bold
        background: #3F8FB4
    }
    .each_minute_selected_sign {
        background: #3F8FB4
        padding: 0 0 0px 10px;
    }
}
</style>
