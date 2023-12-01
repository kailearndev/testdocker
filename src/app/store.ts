import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "pages/Home/homeSlice";
import userReducer from "pages/User/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
