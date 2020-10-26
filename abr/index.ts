import {
    GuestRoomInteractor,
    GuestPolicyInteractor,
    GuestPlanInteractor,
    GuestImageInteractor,
    GuestReservationInteractor,
    GuestReservationCoordinatorInteractor
} from 'iwashi_abr_1023/iwashiabr';

export const roomInteractor = new GuestRoomInteractor();
export const policyInteractor = new GuestPolicyInteractor();
export const planInteractor = new GuestPlanInteractor();
export const imageInteractor = new GuestImageInteractor();
export const reservationInteractor = new GuestReservationInteractor();
export const coordinator = new GuestReservationCoordinatorInteractor();
