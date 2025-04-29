// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../../utils/axiosInstance";

// export const fetchFeedbacks=createAsyncThunk('users/fetchFeedbacks', async () => {
//     const response = await axiosInstance.get(`/api/all`)
//     if (response.status!==200) {
//       throw new Error('Failed to fetch users');
//     }
//     const data =  response.data.feedbacks
//     console.log("data",data);
    
//     return data;
//   });

import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchFeedbacks = createAsyncThunk('feedbacks/fetchFeedbacks', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/api/all');

    if (response.status !== 200) {
      throw new Error('Failed to fetch feedbacks');
    }

    const data = response.data.feedbacks;
    console.log("Fetched feedbacks:", data);

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
