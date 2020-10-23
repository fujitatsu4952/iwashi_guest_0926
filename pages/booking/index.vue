<template>
    <div class="container">
        <app-title value="予約のロジックを読み解いていこう！！！！" />
        <app-title value="お部屋" />
        <room-list :roomMasts="roomMasts" />
        <app-title value="プラン" />
        <plan-list :planMasts="planMasts" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { RoomMast, PlanMast, PolicyMast } from "@/entity/type";
import PlanMethods from "@/methods/planMethods";
import RoomMethods from "@/methods/roomMethods";
// components
import PlanList from "@/components/Organisms/Item/Plan/PlanList.vue";
import RoomList from "@/components/Organisms/Item/Room/RoomList.vue";
import AppTitle from "@/components/Atoms/Text/Title.vue";

@Component({
    components: {
        PlanList,
        RoomList,
        AppTitle
    }
})
export default class BookingPage extends Vue {
    public planMasts: PlanMast[] | null | undefined = null;
    public roomMasts: RoomMast[] | null | undefined = null;

    public async created() {
        this.planMasts = await PlanMethods.fetchPlanMasts(undefined);
        this.roomMasts = await RoomMethods.fetchRoomMasts(undefined);
    }
}
</script>
<style scoped lang="stylus"></style>
