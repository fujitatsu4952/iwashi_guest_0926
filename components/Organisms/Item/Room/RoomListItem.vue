<template>
    <div>
        <span>{{ roomMast.roomID }}</span>
        <span>NAME:{{ roomMast.name }}</span>
        <span>説明:{{ roomMast.description }}</span>
        <span>注意書き:{{ roomMast.subDescription }}</span>
        <span>最低オーダー数:{{ roomMast.minOrderNum }}</span>
        <span>在庫数:{{ roomMast.stockNum }}</span>
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
import { RoomMast } from "iwashi_abr_1023/iwashiabr";

interface reservationRoomItemTemp {
    roomID: string;
    roomNum: number;
}
@Component({
    components: {}
})
export default class RoomListItem extends Vue {
    @Prop() public roomMast!: RoomMast;
    public reservationRoomItemTemp: reservationRoomItemTemp = {
        roomID: this.roomMast.roomID,
        roomNum: 0
    };
    @Emit("getRoom") public getRoom(
        reservationRoomItemTemp: reservationRoomItemTemp
    ) {}
}
</script>
<style scoped lang="stylus"></style>
