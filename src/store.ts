import { configureStore } from "@reduxjs/toolkit";

import goalsReducer from "./features/goals/goalsSlice.tsx";

import counterReducer from "./features/counter/counterSlice.tsx";
import authReducer from "./features/auth/authSlice.tsx";

import mainReducer from "./features/main/mainSlice.tsx";


export const store = configureStore({
  reducer: {
    goals: goalsReducer,
    counter: counterReducer,
    auth: authReducer,
    main: mainReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



