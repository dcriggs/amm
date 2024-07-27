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
        }
    }
});

export const { setContract } = ammSlice.actions;

export default ammSlice.reducer;