

import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchFeedbacks = createAsyncThunk('feedbacks/fetchFeedbacks', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/api/feedback/all');

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
