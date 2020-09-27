import { createStore, applyMiddleware } from "redux";
import rpm from "redux-promise-middleware";
import { persistStore, persistReducer } from 'redux-persist'
import createAsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import indexReducer from "./reducers/index";
const logger = createLogger();

const enhancers = applyMiddleware(rpm, logger);
const storage = createAsyncStorage
const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, indexReducer)

export default () => {
    let store = createStore(persistedReducer, enhancers)
    // let store = createStore(indexReducer, enhancers)
    let persistor = persistStore(store)
    return {
        store,
        persistor
    }
}