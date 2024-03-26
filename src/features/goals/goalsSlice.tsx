import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
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


  
OnNavbox? : string
DefineGoal? : boolean

CompletedBarArray? : string[]
}

// Define initial state
const initialState: GoalInterface = {

  OnNavbox : "Lets Get Started",
  


  CompletedBarArray : [],

  
};


// Define slice
const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    NavboxCheck: (state, action: PayloadAction<string>) => {
      state.OnNavbox = action.payload
    },
    DefineGoalCheck: (state, action: PayloadAction<boolean>) => {
      state.DefineGoal = action.payload
    },


    CompletedBarArrayCheck : (state, action: PayloadAction<string>) => {
      state.CompletedBarArray?.push(action.payload)
      
    }


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

const GoalsCollectionRef = collection(db, "Goals");

export const addGoals = createAsyncThunk(
  "goals/addGoals",
  async (goals: GoalInterface) => {
    try {
      await addDoc(GoalsCollectionRef, {
        ...goals,
        createdAt: serverTimestamp(),
      });
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

  CompletedBarArrayCheck
} = goalsSlice.actions;

// Export reducer
export default goalsSlice.reducer;
