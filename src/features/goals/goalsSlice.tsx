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

};

// Define slice
const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {


    
  },
  extraReducers: (builder) => {
    builder.addCase(
      addGoals.fulfilled,
      () => {
      
        console.log("Done");
      }
    );
    builder.addCase(
      addGoals.pending,
      () => {
       console.log("pending");
      }
    );

  },

});

const GoalsCollectionRef = collection(db, "Goals");

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
// export const {

  
// } = goalsSlice.actions;

// Export reducer
export default goalsSlice.reducer;
