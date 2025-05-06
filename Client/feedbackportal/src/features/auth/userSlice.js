import { createSlice } from "@reduxjs/toolkit";


const userSlice =createSlice({
    name:'user',
    initialState:{user:null,notifications:[]},
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
    },
    setNotifications:(state,action)=>{
        if (!Array.isArray(state.notifications)) {
            state.notifications = [];
        }
        state.notifications.push(action.payload);
    },
    clearNotifications: (state, action) => {
        const userIdToClear = action.payload;
        state.notifications = state.notifications.filter(
            (note) => note.userId !== userIdToClear
        );
    },
    
    removeNotification: (state, action) => {
        const indexToRemove = action.payload;
        if (Array.isArray(state.notifications)) {
          state.notifications.splice(indexToRemove, 1);
        }
      }
      
    
    
}
})

export const{setactiveUser,setlogoutUser,setProfileImage,setNotifications,clearNotifications,removeNotification}=userSlice.actions
export default userSlice.reducer