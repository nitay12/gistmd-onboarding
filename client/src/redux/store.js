import { configureStore } from "@reduxjs/toolkit";
import questionSlice from './slices/questionsSlice'
const store = configureStore({
    reducer: {
        "questions":questionSlice}
})

export default store
