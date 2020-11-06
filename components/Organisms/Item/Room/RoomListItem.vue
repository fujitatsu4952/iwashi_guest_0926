<template>
    <div>
        <span>{{ roomMast.roomID }}</span>
        <span>NAME:{{ roomMast.name }}</span>
        <span>説明:{{ roomMast.description }}</span>
        <span>注意書き:{{ roomMast.subDescription }}</span>
        <span>最低オーダー数:{{ roomMast.minOrderNum }}</span>
        <span>在庫数:{{ roomMast.stockNum }}</span>
        <span>残在庫数:{{ roomStockNum }}</span>
        <div v-if="reservationRoomItemTemp">
            <input
                @change="getRoom(reservationRoomItemTemp)"
                type="number"
                v-model.number="reservationRoomItemTemp.roomNum"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import {
    RoomMast,
    Scalars,
    getTimeRangeArray
} from "iwashi_abr_1023/iwashiabr";
import { coordinator, roomStatusInteractor } from "@/abr/index";
import { reservationStore } from "@/store";

interface reservationRoomItemTemp {
    roomID: string;
    roomNum: number;
}
@Component({
    components: {}
})
export default class RoomListItem extends Vue {
    public roomStockNum: number | null = null;
    public stockNumList: number[] = [];
    @Prop() public roomMast!: RoomMast;
    public reservationRoomItemTemp: reservationRoomItemTemp = {
        roomID: this.roomMast.roomID,
        roomNum: 0
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
            this.roomStockNum = await roomStatusInteractor.fetchStatusWithinRange(
                this.dateMinutes,
                this.roomMast.roomID
            );
        }
    }
    @Emit("getRoom") public getRoom(
        reservationRoomItemTemp: reservationRoomItemTemp
    ) {}
}
</script>
<style scoped lang="stylus"></style>
