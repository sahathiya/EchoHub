import { createSlice } from "@reduxjs/toolkit";
import { fetchFeedbacksAdmin, fetchUsers } from "./adminActions";
const adminSlice=createSlice({
    name:'admin',
    initialState:{users:[],feedbacks:[],  loading: false,error: null,},
    extraReducers:(builder)=>{
         builder
              .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
              })
              .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
              })
              .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              })



              .addCase(fetchFeedbacksAdmin.pending,(state)=>{
                state.loading = true;
                state.error = null;
              })
              .addCase(fetchFeedbacksAdmin.fulfilled,(state,action)=>{
                state.loading = false;
                state.feedbacks = action.payload;
              })
              .addCase(fetchFeedbacksAdmin.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload;
              })

    }
})


export default adminSlice.reducer