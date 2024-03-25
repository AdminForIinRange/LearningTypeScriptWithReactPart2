import { configureStore } from "@reduxjs/toolkit";

import goalsReducer from "./features/goals/goalsSlice.tsx";

import counterReducer from "./features/counter/counterSlice.tsx";



export const store = configureStore({
  reducer: {
    goals: goalsReducer,
    counter: counterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



