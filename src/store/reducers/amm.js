import { createSlice } from "@reduxjs/toolkit";

export const ammSlice = createSlice({
    name: 'amm',
    initialState: {
        contract: null,
        shares: 0,
        swaps: []
    },
    reducers: {
        setContract: (state, action) => {
            state.contract = action.payload
        },
        sharesLoaded: (state, action) => {
            state.shares = action.payload
        }
    }
});

export const { setContract, sharesLoaded } = ammSlice.actions;

export default ammSlice.reducer;