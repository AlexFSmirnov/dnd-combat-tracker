import { createStore, applyMiddleware, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
};

export const store = createStore(persistReducer(persistConfig, rootReducer as Reducer<any, any>), applyMiddleware(thunk));
export const persistor = persistStore(store);
