import { createSlice } from "@reduxjs/toolkit";


const userSlice =createSlice({
    name:'user',
    initialState:{user:null},
    reducers:{
        setactiveUser:(state,action)=>{
            state.user=action.payload
        },
        setlogoutUser:(state,action)=>{
            state.user=null
        },
        setProfileImage(state, action) {
            if (state.user) {
              state.user.profileImage = action.payload;
            }
    }
}
})

export const{setactiveUser,setlogoutUser,setProfileImage}=userSlice.actions
export default userSlice.reducer