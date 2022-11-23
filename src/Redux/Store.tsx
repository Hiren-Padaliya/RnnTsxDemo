import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './Reducer';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const presistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const rootReducer = persistReducer(presistConfig, Reducer)
const store = createStore(rootReducer, applyMiddleware(thunk));
const presist = persistStore(store);
export { store, presist };