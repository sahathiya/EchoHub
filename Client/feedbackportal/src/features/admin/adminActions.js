import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";


export const fetchUsers=createAsyncThunk('users/fetchUsers',async(_, { rejectWithValue })=>{
    try {
        const response=await axiosInstance.get('/api/admin/users')
        if (response.status !== 200) {
            throw new Error('Failed to fetch feedbacks');
          }
      
          const data = response.data.users;
          console.log("Fetched users:", data);
      
          return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})



export const fetchFeedbacksAdmin = createAsyncThunk('feedbacksAdmin/fetchFeedbacks', async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/api/admin/feedbacks');
  
      if (response.status !== 200) {
        throw new Error('Failed to fetch feedbacks');
      }
  
      const data = response.data.feedbacks;
      console.log("Fetched adminside feedbacks:", data);
  
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });
  

  

