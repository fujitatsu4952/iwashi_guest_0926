import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({
    stateFactory: true,
    name: 'modules/status', // store以下のファイル構造に一致させる。
    namespaced: true,
})
export default class StatusModule extends VuexModule {
    private showModal: boolean = false;

    public get isShowModal() {
        return this.showModal;
    }

    @Action
    public changeModalStatus(isShow: boolean) {
        this.CHANGE_MODAL_STATUS(isShow);
    }

    @Mutation
    private CHANGE_MODAL_STATUS(isShow: boolean) {
        this.showModal = isShow;
    }
}
