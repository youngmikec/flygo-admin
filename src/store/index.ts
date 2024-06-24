import { configureStore } from "@reduxjs/toolkit";

//reducers
import modalStateReducer from './modal';
import logoutModalReducer from './modal/logout-modal';


export const store = configureStore({
  reducer: {
    modalState: modalStateReducer,
    logoutModal: logoutModalReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;