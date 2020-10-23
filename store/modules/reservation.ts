// import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
// // import {
// //     ReservationObject,
// //     ReservationCoordinatorInteractor,
// //     OptionStatusList,
// //     OptionMast,
// // } from 'chillnn-abr-hotel';

// @Module({
//     stateFactory: true,
//     name: 'modules/reservation', // store以下のファイル構造に一致させる。
//     namespaced: true,
// })
// export default class ReservationModule extends VuexModule {
//     private maxAdultNumState: number = 0;
//     private optionsState: Array<OptionMast & OptionStatusList> = [];
//     private reservationObjectState: ReservationObject | null = null;
//     // status
//     private isUpdateState: boolean = false;
//     private isPlanSelectableState: boolean = false;
//     private isGroupSelectableState: boolean = false;
//     private isDateSelectableState: boolean = false;
//     private isRoomSelectableState: boolean = false;
//     private isOptionSelectableState: boolean = false;
//     private isGuestInfoSelectableState: boolean = false;
//     private isReservableState: boolean = false;

//     public get maxAdultNum() {
//         return this.maxAdultNumState;
//     }
//     public get options() {
//         return this.optionsState;
//     }
//     public get reservationObject() {
//         return this.reservationObjectState;
//     }

//     // status
//     public get isUpdate(): boolean {
//         return this.isUpdateState;
//     }
//     public get isPlanSelectable(): boolean {
//         return this.isPlanSelectableState;
//     }
//     public get isGroupSelectable(): boolean {
//         return this.isGroupSelectableState;
//     }
//     public get isDateSelectable(): boolean {
//         return this.isDateSelectableState;
//     }
//     public get isRoomSelectable(): boolean {
//         return this.isRoomSelectableState;
//     }
//     public get isOptionSelectable(): boolean {
//         return this.isOptionSelectableState;
//     }
//     public get isGuestInfoSelectable(): boolean {
//         return this.isGuestInfoSelectableState;
//     }
//     public get isReservable(): boolean {
//         return this.isReservableState;
//     }

//     @Action
//     public async statusSetter(coordinator: ReservationCoordinatorInteractor) {
//         const adultNum = await coordinator.getAdultMaxNum();
//         const options = await coordinator.fetchAvailableOptions();
//         this.STATUS_UPDATE({
//             coordinator,
//             adultNum,
//             options,
//         });
//     }

//     @Action
//     public resetStore() {
//         this.RESET_STORE();
//     }

//     @Mutation
//     private async STATUS_UPDATE(input: {
//         coordinator: ReservationCoordinatorInteractor;
//         adultNum: number;
//         options: Array<OptionMast & OptionStatusList>;
//     }) {
//         try {
//             this.maxAdultNumState = input.adultNum;
//             this.optionsState = input.options;
//             this.reservationObjectState = JSON.parse(
//                 JSON.stringify(input.coordinator.reservationObject),
//             ) as ReservationObject;
//             // status
//             this.isUpdateState = !!input.coordinator.reservationObjectOld;
//             this.isPlanSelectableState = input.coordinator.isPlanSelectable();
//             this.isGroupSelectableState = input.coordinator.isGroupSelectable();
//             this.isDateSelectableState = input.coordinator.isDateSelectable();
//             this.isRoomSelectableState = input.coordinator.isRoomSelectable();
//             this.isOptionSelectableState = input.coordinator.isOptionSelectable();
//             this.isGuestInfoSelectableState = input.coordinator.isGuestInfoSelectable();
//             this.isReservableState = input.coordinator.isReservable();
//         } catch (err) {
//             this.maxAdultNumState = 0;
//             this.optionsState = [];
//             this.reservationObjectState = null;
//             // status
//             this.isUpdateState = false;
//             this.isPlanSelectableState = false;
//             this.isGroupSelectableState = false;
//             this.isDateSelectableState = false;
//             this.isRoomSelectableState = false;
//             this.isOptionSelectableState = false;
//             this.isGuestInfoSelectableState = false;
//             this.isReservableState = false;
//         }
//     }
//     @Mutation
//     private RESET_STORE() {
//         this.maxAdultNumState = 0;
//         this.optionsState = [];
//         this.reservationObjectState = null;
//         // status
//         this.isUpdateState = false;
//         this.isPlanSelectableState = false;
//         this.isGroupSelectableState = false;
//         this.isDateSelectableState = false;
//         this.isRoomSelectableState = false;
//         this.isOptionSelectableState = false;
//         this.isGuestInfoSelectableState = false;
//         this.isReservableState = false;
//     }
// }
