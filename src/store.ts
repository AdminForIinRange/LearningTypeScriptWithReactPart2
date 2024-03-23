import { configureStore } from "@reduxjs/toolkit";

import goalsReducer from "./features/goals/goalsSlice.tsx";

export const store = configureStore({
  reducer: {
    goals: goalsReducer,
  },
});
