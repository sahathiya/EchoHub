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
        }
    }
})

export const{setactiveUser,setlogoutUser}=userSlice.actions
export default userSlice.reducer