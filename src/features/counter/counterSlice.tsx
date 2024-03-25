import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
});

export const { add, take, amount } = counterSlice.actions;
export default counterSlice.reducer;
