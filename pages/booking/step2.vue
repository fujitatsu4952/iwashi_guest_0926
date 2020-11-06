<template>
    <div class="step2">
        <div class="step2_container">
            <div class="step2_title">
                <app-title value="コンテンツを決めよう！！！！！！" />
            </div>
            <div><app-title value="お部屋" /></div>
            <room-list :roomMasts="roomMasts" />
            <app-title value="プラン" />
            <plan-list :planMasts="planMasts" />
            <div class="step2_button_container">
                <get-reservation />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { RoomMast, PlanMast, PolicyMast } from "iwashi_abr_1023/iwashiabr";
import { planInteractor, roomInteractor } from "@/abr/index";
// mixins
import { BookingPageMixin } from "@/mixins/bookingMixin";
// components
import PlanList from "@/components/Organisms/Item/Plan/PlanList.vue";
import RoomList from "@/components/Organisms/Item/Room/RoomList.vue";
import GetReservation from "@/components/Organisms/Item/GetReservation.vue";
import AppTitle from "@/components/Atoms/Text/Title.vue";
import AppButton from "@/components/Atoms/Button/LargeButton.vue";

@Component({
    components: {
        PlanList,
        RoomList,
        GetReservation,
        AppTitle,
        AppButton
    }
})
export default class BookingPage extends BookingPageMixin {
    public planMasts: PlanMast[] | null | undefined = null;
    public roomMasts: RoomMast[] | null | undefined = null;

    public async created() {
        if (!this.reservationObjectNow) {
            this.$router.push({
                name: "booking-step1"
            });
            return;
        }
        this.planMasts = await planInteractor.fetchPlanMasts(undefined);
        this.roomMasts = await roomInteractor.fetchRoomMasts(undefined);
    }
}
</script>
<style scoped lang="stylus">
.step2 {
    width:100%;
    height: 100%;
    .step2_container {
        border: 1px solid $iwashiMain
        margin: 30px;
        .step2_title {
            margin: 10px 0;
            text-align: center;
        }
        .step2_button_container {
            text-align: center;
            margin: 5px
        }
    }
}
</style>
