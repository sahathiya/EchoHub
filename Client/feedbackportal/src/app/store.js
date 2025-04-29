import { configureStore } from "@reduxjs/toolkit";
import feedbackSlice from '../features/feedback/feedbackSlice'
const store=configureStore({
    reducer:{
        feedback:feedbackSlice
    }
})

export default store