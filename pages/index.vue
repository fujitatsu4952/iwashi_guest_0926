<template>
    <div class="container">
        <div>
            <h1 class="title">iwashiGUEST</h1>
            <div>ルーム一覧</div>
            <room-list :roomMasts="roomMasts" />
            <div>プラン一覧</div>
            <plan-list :planMasts="planMasts" />
            <div>ポリシー作成</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { RoomMast, PlanMast, PolicyMast } from "@/entity/type";
import PlanMethods from "@/methods/planMethods";
import RoomMethods from "@/methods/roomMethods";

import PlanList from "@/components/Organisms/Item/Plan/PlanList.vue";
import RoomList from "@/components/Organisms/Item/Room/RoomList.vue";

@Component({
    components: {
        RoomList,
        PlanList,
    },
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
<style scoped lang="stylus">
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}
</style>