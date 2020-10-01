<template>
    <div>
        <div>{{ roomMast.name }}</div>
        <div>{{ roomMast.description }}</div>
        <div>{{ roomMast.subDescription }}</div>
        <div>{{ roomMast.minOrderNum }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "nuxt-property-decorator";
import { RoomMast, PlanMast, PolicyMast } from "@/entity/type";

@Component({
    components: {},
})
export default class RoomListItem extends Vue {
    @Prop() public roomMast!: RoomMast;
}
</script>
<style scoped lang="stylus"></style>
