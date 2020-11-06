<template>
    <div class="reservation">
        <div v-if="reservationObject">{{ reservationObject }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { ReservationObject } from "iwashi_abr_1023/iwashiabr";
import { reservationInteractor } from "@/abr/index";
// components
import AppTitle from "@/components/Atoms/Text/Title.vue";
import AppButton from "@/components/Atoms/Button/LargeButton.vue";

@Component({
    components: {
        AppTitle,
        AppButton
    }
})
export default class ReservationPage extends Vue {
    public reservationObject: ReservationObject | null = null;
    public async created() {
        this.reservationObject = await reservationInteractor.fetchReservationObjects(
            this.$route.params.reservationID || null
        );
    }
}
</script>
<style scoped lang="stylus">
.reservation {
    border: 1px
}
</style>
