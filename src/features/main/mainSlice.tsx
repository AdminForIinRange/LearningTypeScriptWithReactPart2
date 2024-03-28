import { createSlice } from "@reduxjs/toolkit";

interface MainStateInterface {
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

const initialState: MainStateInterface = {};

const mainSlice = createSlice({
  name: "main",
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
  },
});

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
  setTimeEstimate,
} = mainSlice.actions;

export default mainSlice.reducer;
