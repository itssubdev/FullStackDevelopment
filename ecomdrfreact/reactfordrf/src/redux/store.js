import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import cartReducer from './cartSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth','cart']
}

const rootreducer = combineReducers({
    auth: authReducer,
    cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig,rootreducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)