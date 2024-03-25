import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

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
}

// Define initial state
const initialState: GoalInterface = {
  MonthlyGoalOne: "",
  MonthlyGoalTwo: "",
  MonthlyGoalThree: "",
  WeeklyGoalOne: "",
  WeeklyGoalTwo: "",
  WeeklyGoalThree: "",
  DailyGoalOne: "",
  DailyGoalTwo: "",
  DailyGoalThree: "",
  goalDescription: "",
  timeEstimate: ""
};

// Define slice
const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    setMonthlyGoalOne: (state, action) => {
      state.MonthlyGoalOne = action.payload;
    },
    setMonthlyGoalTwo: (state, action) => {
      state.MonthlyGoalTwo = action.payload;
    },
    setMonthlyGoalThree: (state, action) => {
      state.MonthlyGoalThree = action.payload;
    },
    setWeeklyGoalOne: (state, action) => {
      state.WeeklyGoalOne = action.payload;
    },
    setWeeklyGoalTwo: (state, action) => {
      state.WeeklyGoalTwo = action.payload;
    },
    setWeeklyGoalThree: (state, action) => {
      state.WeeklyGoalThree = action.payload;
    },
    setDailyGoalOne: (state, action) => {
      state.DailyGoalOne = action.payload;
    },
    setDailyGoalTwo: (state, action) => {
      state.DailyGoalTwo = action.payload;
    },
    setDailyGoalThree: (state, action) => {
      state.DailyGoalThree = action.payload;
    },
    setGoalDescription: (state, action) => {
      state.goalDescription = action.payload;
    },
    setTimeEstimate: (state, action) => {
      state.timeEstimate = action.payload;
    },
  }
});

const GoalsCollectionRef = collection(db, "goals");

export const addGoals = createAsyncThunk(
  "goals/addGoals",
  async (goals: GoalInterface) => {
    try {
      await addDoc(GoalsCollectionRef, {
        ...goals,
        createdAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Error adding goals: ", error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }
);

// Export actions
export const {
  setMonthlyGoalOne,
  setMonthlyGoalTwo,
  setMonthlyGoalThree,
  setWeeklyGoalOne,
  setWeeklyGoalTwo,
  setWeeklyGoalThree,
  setDailyGoalOne,
  setDailyGoalTwo,
  setDailyGoalThree,
  setGoalDescription,
  setTimeEstimate
} = goalsSlice.actions;

// Export reducer
export default goalsSlice.reducer;
