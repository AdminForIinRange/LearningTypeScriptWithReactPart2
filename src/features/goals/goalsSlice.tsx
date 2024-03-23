import { createSlice } from "@reduxjs/toolkit";





// Define initial state
const initialState = {
  Goals: [{
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
  }],
  GoalsAllFilled: 
};


// Define slice
const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    // Reducer to update a specific goal
    updateGoal: (state, action) => {
      const { index, field, value } = action.payload;
      state.Goals[index][field] = value;
    },
    // Add more reducers here if needed
  },
  extraReducers: (builder) => {
    // Define extra reducers here
  }
});

// Export actions
export const { updateGoal } = goalsSlice.actions;

// Export reducer
export default goalsSlice.reducer;
