import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
// import ReservationModule from '@/store/modules/reservation';
// import ShoppingModule from '~/store/modules/shopping';
import StatusModule from '@/store/modules/status';

// let reservationStore: ReservationModule;
// let shoppingStore: ShoppingModule;
let statusStore: StatusModule;

function initialiseStores(store: Store<any>): void {
    // reservationStore = getModule(ReservationModule, store);
    // shoppingStore = getModule(ShoppingModule, store);
    statusStore = getModule(StatusModule, store);
}

export {
    initialiseStores,
    // reservationStore,
    // shoppingStore,
    statusStore,
};
