import {configureStore, combineReducers} from '@reduxjs/toolkit'
import filter from './filter/slice'
import cart from './cart/slice'
import pizza from './pizza/slice'
import { useDispatch } from 'react-redux'

import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({filter, 
  cart,
  pizza})

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['cart']
}

const persistedReducer=persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor=persistStore(store)
export type RootState=ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();