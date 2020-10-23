import { Store } from 'vuex';
import { initialiseStores } from '~/Util/store/storeAccesser';
const initializer = (store: Store<any>) => initialiseStores(store);
export const plugins = [initializer];
export * from '~/Util/store/storeAccesser';
