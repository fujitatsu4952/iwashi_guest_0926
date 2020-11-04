<template>
    <div>
        <app-button statement="予約をとる" @click="register" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { reservationInteractor, coordinator } from "@/abr/index";
// mixins
import { BookingPageMixin } from "@/mixins/bookingMixin";
// components
import AppButton from "@/components/Atoms/Button/LargeButton.vue";

@Component({
    components: {
        AppButton
    }
})
export default class BookingPage extends BookingPageMixin {
    public async register() {
        if (this.reservationObjectNow) {
            console.log(this.reservationObjectNow);
            await reservationInteractor.addMast(this.reservationObjectNow);
        }
    }
}
</script>
<style scoped lang="stylus"></style>
