<template>
    <div @click="getRoom">
        <span>{{ roomMast.roomID }}</span>
        <span>NAME:{{ roomMast.name }}</span>
        <span>説明:{{ roomMast.description }}</span>
        <span>注意書き:{{ roomMast.subDescription }}</span>
        <span>最低オーダー数:{{ roomMast.minOrderNum }}</span>
        <span>在庫数:{{ roomMast.stockNum }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "nuxt-property-decorator";
import { RoomMast, ReservationObject } from "iwashi_abr_1023/iwashiabr";
import { BookingPageMixin } from "@/mixins/bookingMixin";
import { coordinator } from "@/abr/index";

@Component({
    components: {}
})
export default class RoomListItem extends BookingPageMixin {
    @Prop() public roomMast!: RoomMast;

    public async getRoom() {
        if (this.reservationObjectNow) {
            console.log("ルーム取得");
            const reservationObjectTemp: ReservationObject = {
                ...this.reservationObjectNow,
                roomID: this.roomMast.roomID
            };
            console.log(reservationObjectTemp);
            await coordinator.updateReservation(reservationObjectTemp);
        }
    }
}
</script>
<style scoped lang="stylus"></style>
