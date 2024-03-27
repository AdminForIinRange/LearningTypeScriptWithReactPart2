import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    ViewLogin: boolean;
  }
  
  const initialState: AuthState = {
    ViewLogin: true,
  };

  