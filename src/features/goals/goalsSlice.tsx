import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define TypeScript types
interface Goal { 
  MonthlyGoalOne: string;
  MonthlyGoalTwo: string;
  MonthlyGoalThree: string;
  WeeklyGoalOne: string;
  WeeklyGoalTwo: string;
  WeeklyGoalThree: string;
  DailyGoalOne: string;
  DailyGoalTwo: string;
  DailyGoalThree: string;
  goalDescription: string;
  timeEstimate: string;
}

interface GoalsState {
  Goals: Goal[];
}

interface UpdateGoalPayload {
  index: number;
  field: keyof Goal;
  value: string;
}

// Define initial state
const initialState: GoalsState = {
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
  }]
};



//state shoud only hold state, it shoud not be able to mutate 




// Define slice
const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    // Reducer to update a specific goal
    updateGoal: (state, action: PayloadAction<UpdateGoalPayload>) => {
      const { index, field, value } = action.payload;
      state.Goals[index][field] = value;
    },
    // Add more reducers here if needed
  },

});

// Export actions
export const { updateGoal } = goalsSlice.actions;

// Export reducer
export default goalsSlice.reducer;
