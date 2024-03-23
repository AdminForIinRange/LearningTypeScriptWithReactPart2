import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
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
  timeEstimate: "",
  modalValue: ""
};

// Define slice
const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    // Define reducers here
  },
  extraReducers: (builder) => {
    // Define extra reducers here
  }
});

// Export actions
export const { } = goalsSlice.actions;

// Export reducer
export default goalsSlice.reducer;
