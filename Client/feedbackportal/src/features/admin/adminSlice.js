import { createSlice } from "@reduxjs/toolkit";
import { fetchFeedbacksAdmin, fetchUsers,filterFeedbackByDate,filterFeedbackByRating } from "./adminActions";
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



              .addCase(filterFeedbackByRating.pending,(state,action)=>{
                state.loading = true;
                state.error = null;
              })
              .addCase(filterFeedbackByRating.fulfilled,(state,action)=>{
                state.loading = false;
                state.feedbacks = action.payload;
              })
              .addCase(filterFeedbackByRating.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload;
              })




              
              .addCase(filterFeedbackByDate.pending,(state,action)=>{
                state.loading = true;
                state.error = null;
              })
              .addCase(filterFeedbackByDate.fulfilled,(state,action)=>{
                state.loading = false;
                state.feedbacks = action.payload;
              })
              .addCase(filterFeedbackByDate.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload;
              })
    }
})


export default adminSlice.reducer