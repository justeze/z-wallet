import { createStore, applyMiddleware } from "redux";
import rpm from "redux-promise-middleware";
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import createAsyncStorage from '@react-native-community/async-storage';

// import indexReducer from "./reducers/index";

const enhancers = applyMiddleware(rpm);
const storage = createAsyncStorage
// const store = createStore(indexReducer, enhancers);
const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig)

export default () => {
    let store = createStore(persistedReducer, enhancers)
    let persistor = persistStore(store)
    return {
        store,
        persistor
    }
}