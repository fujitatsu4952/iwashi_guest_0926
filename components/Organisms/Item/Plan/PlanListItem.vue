<template>
    <div>
        <span>{{ planMast.planID }}</span>
        <span>NAME:{{ planMast.name }}</span>
        <span>説明:{{ planMast.description }}</span>
        <span>注意書き:{{ planMast.subDescription }}</span>
        <span>値段:{{ planMast.price }}</span>
        <span>在庫数:{{ planMast.stockNum }}</span>
        <span>残在庫数:{{ planStockNum }}</span>
        <div v-if="reservationPlanItemTemp">
            <input
                @change="getPlan(reservationPlanItemTemp)"
                type="number"
                v-model.number="reservationPlanItemTemp.planNum"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import {
    PlanMast,
    PlanStatus,
    ReservationObject,
    getTimeRangeArray,
    Scalars
} from "iwashi_abr_1023/iwashiabr";
import { BookingPageMixin } from "@/mixins/bookingMixin";
import { coordinator, planStatusInteractor } from "@/abr/index";
import { reservationStore } from "@/store";

interface reservationPlanItemTemp {
    planID: string;
    planNum: number;
}
@Component({
    components: {}
})
export default class PlanListItem extends Vue {
    public planStockNum: number | null = null;
    public stockNumList: number[] = [];
    @Prop() public planMast!: PlanMast;
    public reservationPlanItemTemp: reservationPlanItemTemp = {
        planID: this.planMast.planID,
        planNum: 0
    };

    public get reservationObjectNow() {
        return reservationStore.getReservationObject;
    }

    public get dateMinutes(): Scalars["AWSDate"][] | undefined {
        if (this.reservationObjectNow) {
            return getTimeRangeArray(
                this.reservationObjectNow.checkInTime,
                this.reservationObjectNow.checkOutTime
            );
        }
    }

    public async created() {
        if (this.reservationObjectNow && this.dateMinutes) {
            this.planStockNum = await planStatusInteractor.fetchStatusWithinRange(
                this.dateMinutes,
                this.planMast.planID
            );
        }
    }

    @Emit("getPlan") public getPlan(
        reservationPlanItemTemp: reservationPlanItemTemp
    ) {}
}
</script>
<style scoped lang="stylus"></style>
