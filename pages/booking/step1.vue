<template>
    <div class="container">
        <app-title value="予約のロジックを読み解いていこう！！！！" />
        <iwashi-calendar />
        <app-button statement="ステップ2にいく" @click="goStep2()" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
// mixins
// import { BookingPageMixin } from "@/mixins/bookingMixin";
// components
import IwashiCalendar from "@/components/Organisms/Calendar/ReadCalendar.vue";
import AppTitle from "@/components/Atoms/Text/Title.vue";
import AppButton from "@/components/Atoms/Button/LargeButton.vue";

@Component({
    components: {
        AppTitle,
        IwashiCalendar,
        AppButton
    }
})
export default class BookingPage extends Vue {
    public goStep2() {
        this.$router.push({
            name: "booking-step2"
        });
    }
}
</script>
<style scoped lang="stylus"></style>
