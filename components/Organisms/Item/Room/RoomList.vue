<template>
    <div v-if="roomMasts">
        <div v-for="roomMast in roomMasts" :key="roomMast.roomID">
            <room-list-item :roomMast="roomMast" @getRoom="getRoom" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "nuxt-property-decorator";
import { RoomMast, ReservationObject } from "iwashi_abr_1023/iwashiabr";
import { coordinator } from "@/abr/index";
// mixin
import { BookingPageMixin } from "@/mixins/bookingMixin";
// components
import RoomListItem from "./RoomListItem.vue";

interface reservationRoomItemTemp {
    roomID: string;
    roomNum: number;
}
@Component({
    components: { RoomListItem }
})
export default class RoomList extends BookingPageMixin {
    @Prop() public roomMasts: RoomMast[] | null | undefined;
    public reservationRoomListTemp: reservationRoomItemTemp[] = [];

    public async getRoom(reservationRoomItemTemp: reservationRoomItemTemp) {
        //　ダブリがあればそのプランの個数だけ更新
        let duplicateTarget:
            | reservationRoomItemTemp
            | undefined = this.reservationRoomListTemp.find(item => {
            return item.roomID === reservationRoomItemTemp.roomID;
        });
        if (!duplicateTarget) {
            //　初見
            this.reservationRoomListTemp.push(reservationRoomItemTemp);
        } else {
            duplicateTarget.roomNum = reservationRoomItemTemp.roomNum;
            // もし個数が0個のものがあれば消去する
            this.reservationRoomListTemp = this.reservationRoomListTemp.filter(
                item => {
                    return item.roomNum !== 0;
                }
            );
        }
        if (this.reservationObjectNow) {
            const reservationObjectTemp: ReservationObject = {
                ...this.reservationObjectNow,
                roomID: JSON.stringify(this.reservationRoomListTemp)
            };
            await coordinator.updateReservation(reservationObjectTemp);
        }
    }
}
</script>
<style scoped lang="stylus"></style>
