import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  LoginForm: boolean;
}

const initialState: AuthState = {
  LoginForm: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginForm: (state, action: PayloadAction<boolean>) => {
      state.LoginForm = action.payload;
    },
  },
});

export const { setLoginForm } = authSlice.actions;
export default authSlice.reducer;
