import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: 'input',
    initialState: {
        value: '',
    },
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {changeValue} = inputSlice.actions;

export default inputSlice.reducer;