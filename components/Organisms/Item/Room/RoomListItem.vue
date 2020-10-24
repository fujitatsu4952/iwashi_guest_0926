<template>
    <div>
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
import { RoomMast, PlanMast, PolicyMast } from "@/entity/type";

@Component({
    components: {}
})
export default class RoomListItem extends Vue {
    @Prop() public roomMast!: RoomMast;

    public created() {
        console.log("ININ");
    }

    public getPlan() {
        console.log(this.roomMast.roomID);
    }
}
</script>
<style scoped lang="stylus"></style>
