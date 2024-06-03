import { ActionReducerMapBuilder, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { TRootState, rootReducer } from "./reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
  });
  }
})

export const persistor = persistStore(store);

export type TSliceReducer<T, S = void> = (state: T, action: PayloadAction<S>) => T | void;
export type TAppDispatch = typeof store.dispatch;
export type TSliceExtraReducer<T> = (builder: ActionReducerMapBuilder<T>) => ActionReducerMapBuilder<T>;
export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export default store;