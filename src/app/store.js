import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
import inputReducer from './features/input/inputSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        input: inputReducer,
    },
})