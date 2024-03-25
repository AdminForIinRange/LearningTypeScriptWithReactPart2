import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define TypeScript types
interface initialStateInterface {
  

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



// Define initial state
const initialState: initialStateInterface = {

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



//state shoud only hold state, it shoud not be able to mutate 




// Define slice
const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
   

  },

});


export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);


// Export actions
export const {  } = goalsSlice.actions;

// Export reducer
export default goalsSlice.reducer;
