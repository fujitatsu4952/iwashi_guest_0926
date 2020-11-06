import { Vue, Component } from 'nuxt-property-decorator';
import { ReservationObject, GuestReservationCoordinatorInteractor } from 'iwashi_abr_1023/iwashiabr'
import { reservationInteractor, coordinator } from "@/abr/index";
import { reservationStore } from "@/store";

@Component({
})

export class BookingPageMixin extends Vue {
    public reservationObject: ReservationObject | null = null; 
    public coordinator: GuestReservationCoordinatorInteractor = coordinator;

    public async created() {
        coordinator.start();
        if(!this.reservationObjectNow) {
            console.log("既存のがない")
            this.reservationObject = (await reservationInteractor.getBlanc());
        } else {
            console.log("既存のがある")
            this.reservationObject = this.reservationObjectNow
        }
        await reservationStore.reservationStatus(this.reservationObject)
        coordinator.addObserver(this.statusChanger)
    }

    public get reservationObjectNow() {
        return reservationStore.getReservationObject;
    }

    // ================= private =================
    public async statusChanger() {
        await reservationStore.statusSetter(this.coordinator);
    }
}