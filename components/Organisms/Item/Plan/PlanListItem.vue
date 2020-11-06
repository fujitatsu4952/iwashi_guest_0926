<template>
    <div class="plan_list_item">
        <app-sub-title :value="planMast.name" bold />

        <app-text :value="planMast.description" />
        <app-caption :value="planMast.subDescription" />
        <app-text bold :value="`¥${planMast.price}`" />

        <div>在庫数:{{ planMast.stockNum }}</div>
        <div>残在庫数:{{ planStockNum }}</div>
        <div v-if="reservationPlanItemTemp">
            <template v-if="planStockNum > 0">
                <input
                    @change="getPlan(reservationPlanItemTemp)"
                    type="number"
                    v-model.number="reservationPlanItemTemp.planNum"
                    :max="planStockNum"
                    min="0"
                    class="plan_num_input"
                />
            </template>
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
import AppSubTitle from "@/components/Atoms/Text/TitleSub.vue";
import AppText from "@/components/Atoms/Text/Text.vue";
import AppCaption from "@/components/Atoms/Text/Caption.vue";

interface reservationPlanItemTemp {
    planID: string;
    planNum: number;
}
@Component({
    components: {
        AppSubTitle,
        AppText,
        AppCaption
    }
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
<style scoped lang="stylus">
.plan_list_item {
    min-width: 300px;
    border: 1px solid $iwashiMain
    .plan_num_input {
        background-color: rgba(63,143,180,0.2);
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
}
</style>
