// import {createSlice} from '@reduxjs/toolkit'
// const feedbackSlice=createSlice({
//     name:'feedbacks',
//     initialState:{
//         feedbacks:[]
//     },
//     reducers:{
//         setAllfeedbacks:(state,action)=>{
//             state.feedbacks=action.payload

//         }
//     }
// })

// export const{setAllfeedbacks}=feedbackSlice.actions
// export default feedbackSlice.reducer


import { createSlice } from '@reduxjs/toolkit';
import { fetchFeedbacks } from './feedbackActions'; // import your thunk here

const feedbackSlice = createSlice({
  name: 'feedbacks',
  initialState: {
    feedbacks: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedbacks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeedbacks.fulfilled, (state, action) => {
        state.loading = false;
        state.feedbacks = action.payload;
      })
      .addCase(fetchFeedbacks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});


export default feedbackSlice.reducer;
