// import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
// // import { ShoppingCoordinatorInteractor, UserECReceipt } from 'chillnn-abr-hotel';

// @Module({
//     stateFactory: true,
//     name: 'modules/shopping',  // store以下のファイル構造に一致させる。
//     namespaced: true,
// })
// export default class ShoppingModule extends VuexModule {
//     private userECReceiptState: UserECReceipt | null = null;
//     private isGuestInfoSelectableState: boolean = false;
//     private isReservableState: boolean = false;

//     public get userECReceipt() {
//         return this.userECReceiptState;
//     }
//     public get isGuestInfoSelectable(): boolean {
//         return this.isGuestInfoSelectableState;
//     }
//     public get isReservable(): boolean {
//         return this.isReservableState;
//     }

//     @Action
//     public statusSetter(
//         coordinator: ShoppingCoordinatorInteractor,
//     ) {
//         this.STATUS_UPDATE(coordinator);
//     }

//     @Action
//     public resetStore() {
//         this.RESET_STORE();
//     }

//     @Mutation
//     private STATUS_UPDATE(
//         coordinator: ShoppingCoordinatorInteractor,
//     ) {
//         try {
//             this.userECReceiptState = JSON.parse(JSON.stringify(coordinator.userECReceipt)) as UserECReceipt;
//             this.isGuestInfoSelectableState = coordinator.isGuestInfoSelectable();
//             this.isReservableState = coordinator.isReservable();
//         } catch (err) {
//             this.userECReceiptState = null;
//             this.isGuestInfoSelectableState = false;
//             this.isReservableState = false;
//         }
//     }
//     @Mutation
//     private RESET_STORE() {
//         this.userECReceiptState = null;
//         this.isGuestInfoSelectableState = false;
//         this.isReservableState = false;
//     }
// }
