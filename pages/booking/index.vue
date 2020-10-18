<template>
    <div class="container">
        <app-title value="予約をするところ" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { RoomMast, PlanMast, PolicyMast } from "@/entity/type";
import AppTitle from "@/components/Atoms/Text/Title.vue";

@Component({
    components: {
        AppTitle
    }
})
export default class BookingPage extends Vue {
    public planMasts: PlanMast[] | null | undefined = null;
    public roomMasts: RoomMast[] | null | undefined = null;

    //     public async created() {
    //         this.planMasts = await PlanMethods.fetchPlanMasts(undefined);
    //         this.roomMasts = await RoomMethods.fetchRoomMasts(undefined);
    //     }
}
</script>
<style scoped lang="stylus"></style>
