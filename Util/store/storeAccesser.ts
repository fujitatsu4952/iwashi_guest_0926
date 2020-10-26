import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import ReservationModule from '@/store/modules/reservation';

let reservationStore: ReservationModule;

function initialiseStores(store: Store<any>): void {
    reservationStore = getModule(ReservationModule, store);
}

export {
    initialiseStores,
    reservationStore,
};
