<template>
    <div class="room_list_item">
        <app-sub-title :value="roomMast.name" bold />
        <app-text :value="roomMast.description" />
        <app-caption :value="roomMast.subDescription" />
        <app-text bold :value="`min${roomMast.minOrderNum}`" />
        <span>在庫数:{{ roomMast.stockNum }}</span>
        <span>残在庫数:{{ roomStockNum }}</span>
        <div v-if="reservationRoomItemTemp">
            <template v-if="roomStockNum > 0">
                <input
                    @change="getRoom(reservationRoomItemTemp)"
                    type="number"
                    v-model.number="reservationRoomItemTemp.roomNum"
                    :max="roomStockNum"
                    min="0"
                    class="room_num_input"
                />
            </template>
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
import AppSubTitle from "@/components/Atoms/Text/TitleSub.vue";
import AppText from "@/components/Atoms/Text/Text.vue";
import AppCaption from "@/components/Atoms/Text/Caption.vue";

interface reservationRoomItemTemp {
    roomID: string;
    roomNum: number;
}
@Component({
    components: {
        AppSubTitle,
        AppText,
        AppCaption
    }
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
<style scoped lang="stylus">
.room_list_item {
    min-width: 300px;
    border: 1px solid $iwashiMain
    .room_num_input {
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
