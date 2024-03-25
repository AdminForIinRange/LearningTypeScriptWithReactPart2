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
    MonthlyGoalOne: (state, action) => {
      state.MonthlyGoalOne = action.payload;
    },
    MonthlyGoalTwo: (state, action) => {
      state.MonthlyGoalTwo = action.payload;
    },
    MonthlyGoalThree: (state, action) => {
      state.MonthlyGoalThree = action.payload;
    },
    WeeklyGoalOne: (state, action) => {
      state.WeeklyGoalOne = action.payload;
    },
    WeeklyGoalTwo: (state, action) => {
      state.WeeklyGoalTwo = action.payload;
    },
    WeeklyGoalThree: (state, action) => {
      state.WeeklyGoalThree = action.payload;
    },
    DailyGoalOne: (state, action) => {
      state.DailyGoalOne = action.payload;
    },
    DailyGoalTwo: (state, action) => {
      state.DailyGoalTwo = action.payload;
    },
    DailyGoalThree: (state, action) => {
      state.DailyGoalThree = action.payload;
    },
    GoalDescription: (state, action) => {
      state.goalDescription = action.payload;
    },
    TimeEstimate: (state, action) => {
      state.timeEstimate = action.payload;
    },

    
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
export const {
  MonthlyGoalOne,
  MonthlyGoalTwo,
  MonthlyGoalThree,
  WeeklyGoalOne,
  WeeklyGoalTwo,
  WeeklyGoalThree,
  DailyGoalOne,
  DailyGoalTwo,
  DailyGoalThree,
  GoalDescription,
  TimeEstimate,
  
} = goalsSlice.actions;

// Export reducer
export default goalsSlice.reducer;
