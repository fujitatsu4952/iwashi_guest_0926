<template>
    <div v-if="roomMasts">
        <div v-for="roomMast in roomMasts" :key="roomMast.roomID">
            <room-list-item :roomMast="roomMast" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "nuxt-property-decorator";
import { RoomMast, PlanMast, PolicyMast } from "@/entity/type";

import RoomListItem from "./RoomListItem.vue";
@Component({
    components: { RoomListItem },
})
export default class RoomList extends Vue {
    @Prop() public roomMasts: RoomMast[] | null | undefined;
}
</script>
<style scoped lang="stylus"></style>
