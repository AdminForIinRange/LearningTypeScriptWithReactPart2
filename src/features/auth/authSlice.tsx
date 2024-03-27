import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signInWithPopup ,signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import { auth, provider } from "../../config/firebase";

interface AuthStateInterface {
  LoginForm: boolean;
  user: userDataInterface | null; // Change made here
  isLoading: boolean;
  errorState: {message: string} | null;
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
  errorState:{message: ''},
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
      state.errorState = null;
    })
    .addCase(signInWithGoogle.rejected, (state, action) => {
      state.isLoading = false;
      state.errorState ={
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
      state.errorState = null;
    })
    .addCase(signInWithEmailPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.errorState ={
        message: action.error.message || "Something went wrong",
      }
      if (action.payload === "auth/invalid-credential") {
        state.invalidCredential = true;
        console.log(action.error.code)
      }
     
    })

    
    .addCase(registerWithEmailAndPassword.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(registerWithEmailAndPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.errorState = null;
      state.emailInUse = false;
      state.weakPassword = false;
      
    })
    .addCase(registerWithEmailAndPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.errorState ={
        message: action.error.message || "Something went wrong",
      }
      if (action.error.code === "auth/email-already-in-use") {
        state.emailInUse = true;
        console.log(action.error.code)
      }
      if (action.payload === "auth/weak-password") {
        state.weakPassword = true;
        console.log(action.error.code)
      }
    })
    .addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(resetPassword.fulfilled, (state) => {
      state.isLoading = false;
      state.errorState = null;
    })
    .addCase(resetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.errorState ={
        message: action.error.message || "Something went wrong",
      }
      
    });
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
      return rejectWithValue(error.message);
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
      return rejectWithValue(error.message);
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
      if (error.code ===  "auth/invalid-credential") {
        dispatch(setinvalidCredential(true)); // Dispatch action to set emailInUse to true
      }
      return rejectWithValue(error.message );
    }
  }
);




export const registerWithEmailAndPassword = createAsyncThunk(
  "auth/registerWithEmailAndPassword",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue, dispatch }) => {
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
      console.error(error);
      if (error.code === "auth/email-already-in-use") {
        dispatch(setEmailInUse(true)); // Dispatch action to set emailInUse to true
      }
      if (error.code === "auth/weak-password") {
        dispatch(setweakPassword(true)); // Dispatch action to set weakPassword to true
      }
      return rejectWithValue(error);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({email} : {email: string},  { rejectWithValue, dispatch }) => {
    try {
      await sendPasswordResetEmail(auth, email);
    console.log(email)
    dispatch(setForgotPassword(true))
      return null; // Success, no need to return any data
    } catch (error) {
      console.log(email)
      return rejectWithValue(error.message);
    }
  }
);


export const { setLoginForm  , setUserData, setEmailInUse, setinvalidCredential, sethasNotPasswordVerified, setForgotPassword, setweakPassword} = authSlice.actions;
export default authSlice.reducer;
