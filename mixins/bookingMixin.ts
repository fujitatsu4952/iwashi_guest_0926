import { Vue } from 'nuxt-property-decorator';
import { ReservationObject, GuestReservationCoordinatorInteractor } from 'iwashi_abr_1023/iwashiabr'
import { reservationInteractor, coordinator } from "@/abr/index";
import { reservationStore } from "@/store";

export class BookingPageMixin extends Vue {
    public reservationObject: ReservationObject | null = null; 
    public coordinator: GuestReservationCoordinatorInteractor = coordinator;

    public async start() {
        coordinator.start();
        if(!this.reservationObjectNow) {
            console.log("既存のがない")
            this.reservationObject = (await reservationInteractor.getBlanc());
        } else {
            console.log("既存のがある")
            this.reservationObject = this.reservationObjectNow
        }
        console.log(6)
        coordinator.addObserver(this.statusChanger)
        console.log(this.reservationObject)
    }

    public get reservationObjectNow() {
        return reservationStore.getReservationObject;
    }

    // ================= private =================
    private async statusChanger() {
        console.log("エラー直前")
        console.log(this.coordinator);
        console.log("ここでエラー")
        await reservationStore.statusSetter(this.coordinator);
        console.log("ここまで到達しない")
    }
}