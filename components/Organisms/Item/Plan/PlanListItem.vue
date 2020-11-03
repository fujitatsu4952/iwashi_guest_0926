<template>
    <div>
        <span>{{ planMast.planID }}</span>
        <span>NAME:{{ planMast.name }}</span>
        <span>説明:{{ planMast.description }}</span>
        <span>注意書き:{{ planMast.subDescription }}</span>
        <span>値段:{{ planMast.price }}</span>
        <span>在庫数:{{ planMast.stockNum }}</span>
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
import { PlanMast, ReservationObject } from "iwashi_abr_1023/iwashiabr";
import { BookingPageMixin } from "@/mixins/bookingMixin";
import { coordinator } from "@/abr/index";

interface reservationPlanItemTemp {
    planID: string;
    planNum: number;
}
@Component({
    components: {}
})
export default class PlanListItem extends Vue {
    @Prop() public planMast!: PlanMast;
    public reservationPlanItemTemp: reservationPlanItemTemp = {
        planID: this.planMast.planID,
        planNum: 0
    };

    @Emit("getPlan") public getPlan(
        reservationPlanItemTemp: reservationPlanItemTemp
    ) {}
}
</script>
<style scoped lang="stylus"></style>
