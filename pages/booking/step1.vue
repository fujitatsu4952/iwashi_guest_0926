<template>
    <div class="step1">
        <div class="step1_container">
            <div class="step1_title">
                <app-title value="日時を選択してね！！！！" />
            </div>
            <iwashi-calendar />
            <div class="step1_button_container">
                <app-button statement="ステップ2にいく" @click="goStep2()" />
            </div>
        </div>
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
<style scoped lang="stylus">
.step1 {
    width:100%;
    height: 100%;
    .step1_container {
        border: 1px solid $iwashiMain
        margin: 30px;
        .step1_title {
            margin: 10px 0;
            text-align: center;
        }
        .step1_button_container {
            text-align: center;
            margin: 5px
        }
    }
}
</style>
