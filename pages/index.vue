<template>
    <div class="container">
        <div>
            <app-button statement="予約をしにいく" @click="goBooking()" />
            <h1 class="title">iwashiGUEST</h1>
            <app-button statement="ステップ1にいく" @click="goStep1()" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
// components
import AppButton from "@/components/Atoms/Button/LargeButton.vue";
import PlanList from "@/components/Organisms/Item/Plan/PlanList.vue";
import RoomList from "@/components/Organisms/Item/Room/RoomList.vue";

@Component({
    components: {
        AppButton,
        RoomList,
        PlanList
    }
})
export default class BookingPage extends Vue {
    public goBooking() {
        this.$router.push({
            name: "booking"
        });
    }
    public goStep1() {
        this.$router.push({
            name: "booking-step1"
        });
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
