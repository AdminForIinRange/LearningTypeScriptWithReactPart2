import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";

import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  getDocs,
  query,
  where,
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
  DefineGoal?: boolean;

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
    DefineGoalCheck: (state, action: PayloadAction<boolean>) => {
      state.DefineGoal = action.payload;
    },

    CompletedBarArrayCheck: (state, action: PayloadAction<string>) => {
      state.CompletedBarArray?.push(action.payload);
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
        throw new Error("User ID not found in local storage");
      }

      const userDocRef = doc(db, "users", userId); // Assuming your user documents are stored in a collection named "users"
      const goalsCollectionRef = collection(userDocRef, "goals");

      const goalsQuery = query(goalsCollectionRef);
      const goalsSnapshot = await getDocs(goalsQuery);
      const goalsCount = goalsSnapshot.size;

      if (goalsCount < 11) {
        // If the user has less than 11 entries, add the goal to the "goals" collection
        await addDoc(goalsCollectionRef, {
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
export const {
  NavboxCheck,
  DefineGoalCheck,

  CompletedBarArrayCheck,
} = goalsSlice.actions;

// Export reducer
export default goalsSlice.reducer;
