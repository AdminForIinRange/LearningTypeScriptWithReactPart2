import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signInWithPopup ,signOut} from "firebase/auth";
import { auth, provider } from "../../config/firebase";

interface AuthStateInterface {
  LoginForm: boolean;
  user: userDataInterface | null; // Change made here
  isLoading: boolean;
  error: {message: string} | null;
  emailInUse: boolean;
  invalidCredential: boolean;
  hasNotPasswordVerified: boolean;
  forgotPassword: boolean;
  weakPassword: boolean;
}

interface userDataInterface {
  name: string | null;
  profilePhoto: string | null;
  userID: string | null;
  isAuth: boolean | null;
  email: string | null;
  
}

const initialState: AuthStateInterface = {
  LoginForm: true,
  user: null, // Change made here
  isLoading: false,
  error:{message: ''},
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
    setEmailInUse: (state, action: PayloadAction<boolean>) => {
      state.emailInUse = action.payload;
    },
    setinvalidCredential: (state, action: PayloadAction<boolean>) =>{
      state.invalidCredential = action.payload;
    },
    sethasNotPasswordVerified: (state, action: PayloadAction<boolean>) => {
      state.hasNotPasswordVerified = action.payload;
    },
    setForgotPassword : (state, action: PayloadAction<boolean>) => {
      state.forgotPassword = action.payload;
    },
    setUserData: (state, action : PayloadAction<userDataInterface | null>) => { // Change made here
      state.user = action.payload;
    },
    setweakPassword: (state, action : PayloadAction<boolean>) => {
      state.weakPassword = action.payload;
    },    
  },
  extraReducers: (builder) => {
    builder
    .addCase(signInWithGoogle.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(signInWithGoogle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = {
        name: action.payload.name,
        profilePhoto: action.payload.profilePhoto,
        userID: action.payload.userID,
        email: action.payload.email,
        isAuth: action.payload.isAuth,
      };
      state.error = null;
    })
    .addCase(signInWithGoogle.rejected, (state, action) => {
      state.isLoading = false;
      state.error ={
        message: action.error.message || "Something went wrong",
      }
    })
  },
});

export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async (_, { rejectWithValue }) => {
    try {
      const results = await signInWithPopup(auth, provider);
      const authInfo = {
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        userID: results.user.uid,
        email: results.user.email,
        isAuth: true,
      };
      localStorage.setItem('authToken', authInfo.userID);
      localStorage.setItem('UserTestStorage', JSON.stringify(authInfo));
      return authInfo;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const signOutUser = createAsyncThunk(
  "auth/signOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      localStorage.removeItem('authToken');
      // No need to log state.user here, as it's not relevant to the functionality
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const { setLoginForm  , setUserData, setEmailInUse, setinvalidCredential, sethasNotPasswordVerified, setForgotPassword, setweakPassword} = authSlice.actions;
export default authSlice.reducer;
