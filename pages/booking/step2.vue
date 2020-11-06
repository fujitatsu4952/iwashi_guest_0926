<template>
    <div>
        <app-title value="予約のロジックを読み解いていこう！！！！" />
        <div><app-title value="お部屋" /></div>
        <room-list :roomMasts="roomMasts" />
        <app-title value="プラン" />
        <plan-list :planMasts="planMasts" />
        <get-reservation />
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
<style scoped lang="stylus"></style>
