import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signInWithPopup ,signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
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

    .addCase(signInWithEmailPassword.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(signInWithEmailPassword.fulfilled, (state, action) => {
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
    .addCase(signInWithEmailPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error ={
        message: action.error.message || "Something went wrong",
      }
      if (action.payload === "auth/invalid-credential") {
        state.invalidCredential = true;
      }
     
    })

    
    .addCase(registerWithEmailAndPassword.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(registerWithEmailAndPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
      state.emailInUse = true;
      state.weakPassword = true;
      
    })
    .addCase(registerWithEmailAndPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error ={
        message: action.error.message || "Something went wrong",
      }
      if (action.payload === "auth/email-already-in-use") {
        state.emailInUse = true;
      }
      if (action.payload === "auth/weak-password") {
        state.weakPassword = true;
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
      localStorage.setItem('authToken', "");
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signInWithEmailPassword = createAsyncThunk(
  "auth/signInWithEmailPassword",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue, dispatch }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const authInfo = {
        name: user.displayName,
        profilePhoto: user.photoURL,
      
        userID: user.uid,
        email: user.email,
        isAuth: true,
      };
      localStorage.setItem('authToken', authInfo.userID);
      return authInfo;
    } catch (error) {
      if (error === "auth/invalid-credential") {
        dispatch(setinvalidCredential(true)); // Dispatch action to set emailInUse to true
      }
      return rejectWithValue(error );
    }
  }
);



export const registerWithEmailAndPassword = createAsyncThunk(
  "auth/registerWithEmailAndPassword",
  async ({ email, password } : { email: string; password: string }, { rejectWithValue, dispatch }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const authInfo = {
        name: user.displayName,
        profilePhoto: user.photoURL,
      
        userID: user.uid,
        email: user.email,
        isAuth: true,
      };
      return authInfo;
    } catch (error) {
      if (error === "auth/email-already-in-use") {
        dispatch(setEmailInUse(true)); // Dispatch action to set emailInUse to true
      }
      if (error === "auth/weak-password") {
        dispatch(setweakPassword(true)); // Dispatch action to set emailInUse to true
      }
      return rejectWithValue(error );
    }
  }
);




export const { setLoginForm  , setUserData, setEmailInUse, setinvalidCredential, sethasNotPasswordVerified, setForgotPassword, setweakPassword} = authSlice.actions;
export default authSlice.reducer;
