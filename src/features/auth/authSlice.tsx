import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { auth, provider } from "../../config/firebase";

interface AuthStateInterface {
  LoginForm?: boolean;
  user?: {
    name: string,
    profilePhoto: string,
    userID: string,
    isAuth: boolean,
  } | null;
  isLoading?: boolean;
  error?: string | null;
  emailInUse?: boolean;
  invalidCredential?: boolean;
  hasNotPasswordVerified?: boolean;
  forgotPassword?: boolean;
  weakPassword?: boolean;
}

const initialState: AuthStateInterface = {
  LoginForm: true,
  user: null,
  isLoading: false,
  error: null,
  emailInUse: false,
  invalidCredential: false,
  hasNotPasswordVerified: false,
  forgotPassword: false,
  weakPassword: false
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
