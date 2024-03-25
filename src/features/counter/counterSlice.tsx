import { createSlice } from "@reduxjs/toolkit";

interface counterState {
    value: number;
}


const initialState: counterState = {
    value: 0
}


const counterSlice = createSlice({

    name: "counter",
    initialState,
    reducers: {
        add: (state) =>{
            state.value += 1

        }
        ,
        take: (state) =>{
            state.value -= 1
        }
    }
})

export default counterSlice.reducer
