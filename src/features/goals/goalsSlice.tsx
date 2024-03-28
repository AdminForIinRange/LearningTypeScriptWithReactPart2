import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";

import {
  addDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

// Define TypeScript types
interface GoalInterface {
  MonthlyGoalOne?: string;
  MonthlyGoalTwo?: string;
  MonthlyGoalThree?: string;
  WeeklyGoalOne?: string;
  WeeklyGoalTwo?: string;
  WeeklyGoalThree?: string;
  DailyGoalOne?: string;
  DailyGoalTwo?: string;
  DailyGoalThree?: string;
  goalDescription?: string;
  timeEstimate?: string;
  OnNavbox?: string;
  CompletedBarArray?: string[];
}

// Define initial state
const initialState: GoalInterface = {
  OnNavbox: "Lets Get Started",
  CompletedBarArray: [],
};

// Define slice
const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    NavboxCheck: (state, action: PayloadAction<string>) => {
      state.OnNavbox = action.payload;
    },

    CompletedBarArrayCheck: (state, action: PayloadAction<string>) => {
      if (state.CompletedBarArray) {
        state.CompletedBarArray.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addGoals.fulfilled, () => {
      console.log("Done");
    });
    builder.addCase(addGoals.pending, () => {
      console.log("pending");
    });
    builder.addCase(addGoals.rejected, () => {
      console.log("error");
    });
  },
});

export const addGoals = createAsyncThunk(
  "goals/addGoals",
  async (goals: GoalInterface) => {
    try {
      // Retrieve user ID from local storage
      const userId = localStorage.getItem("authToken");

      if (!userId) {
        throw new Error("User ID not found");
      }

      const userDocRef = doc(db, "users", userId);

      // Check if userDocRef exists
      if (userDocRef) {
        await addDoc(userDocRef, {
          ...goals,
          createdAt: serverTimestamp(),
        });
      } else {
        throw new Error("User has reached the maximum number of goals");
      }
    } catch (error) {
      console.error("Error adding goals: ", error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }
);

// Export actions
export const { NavboxCheck, CompletedBarArrayCheck } = goalsSlice.actions;

// Export reducer
export default goalsSlice.reducer;
