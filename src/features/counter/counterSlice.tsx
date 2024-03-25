import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};
//  PayloadAction<number>



const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //function
    add: (state) => {
      state.value += 1;
    },
    take: (state) => {
      state.value -= 1;
    },
    amount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      incrementAsync.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.value += action.payload;
        console.log("Done");
      }
    );
    builder.addCase(
      incrementAsync.pending,
      () => {
       console.log("pending");
      }
    );

  },
});


export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return amount;
    }
  );

export const { add, take, amount } = counterSlice.actions;
export default counterSlice.reducer;
