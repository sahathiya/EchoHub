import { configureStore } from "@reduxjs/toolkit";
import feedbackSlice from '../features/feedback/feedbackSlice'
import userSlice from '../features/auth/userSlice'
import adminSlice from '../features/admin/adminSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



const userPersistConfig = {
    key: "user",
    storage,
  };

 const feedbackPersistConfig={
    key: "feedback",
    storage,
 } 


 const adminPersistConfig={
    key: "admin",
    storage,

 }

  const persistedUserReducer = persistReducer(userPersistConfig, userSlice);

  const persistedFeedbackReducer = persistReducer(feedbackPersistConfig, feedbackSlice);

  const persistedAdminReducer=persistReducer(adminPersistConfig,adminSlice)
export const store=configureStore({
    reducer:{
        feedback:persistedFeedbackReducer,
        user:persistedUserReducer,
        admin:persistedAdminReducer
    }
})

export const persistor = persistStore(store);