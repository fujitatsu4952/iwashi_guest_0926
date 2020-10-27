import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { ReservationObject, GuestReservationCoordinatorInteractor, PlanMast, RoomMast, PolicyMast, ImageMast } from 'iwashi_abr_1023/iwashiabr'


@Module({
    stateFactory: true,
    name: 'modules/reservation', // store以下のファイル構造に一致させる。
    namespaced: true,
})
export default class ReservationModule extends VuexModule {

    private reservationObjectState: ReservationObject | null = null;

    public get getReservationObject() {
        return this.reservationObjectState;
    }

    // status
  
    @Action
    public async statusSetter(coordinator: GuestReservationCoordinatorInteractor | null) {
        this.STATUS_UPDATE({ coordinator });
    }

    @Action
    public async reservationStatus(reservationObject: ReservationObject) {
        this.RESERVATION_STATUS(reservationObject)
    }

    @Action
    public resetStore() {
        this.RESET_STORE();
    }

    @Mutation
    private async STATUS_UPDATE(input: {
        coordinator: GuestReservationCoordinatorInteractor | null
    }) {
        try {
            if(input.coordinator) {
                this.reservationObjectState = JSON.parse(
                    JSON.stringify(input.coordinator.getReservationObject)
                ) as ReservationObject;
            }
        } catch (err) {
            this.reservationObjectState = null;
        }
    }
    @Mutation
    private async RESERVATION_STATUS(reservationObject: ReservationObject) {
        this.reservationObjectState = reservationObject
    }
    @Mutation
    private RESET_STORE() {
        this.reservationObjectState = null;
    }
}
