import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}


const initialState: CounterState = {
    value: 0
}


const CounterSlice = createSlice = ({

    name: "counter",
    initialState,
    reducers: {
        
    }
})

export default CounterSlice.reducers
