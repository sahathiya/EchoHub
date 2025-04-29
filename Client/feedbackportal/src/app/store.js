import { configureStore } from "@reduxjs/toolkit";
import feedbackSlice from '../features/feedback/feedbackSlice'
import userSlice from '../features/auth/userSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



const userPersistConfig = {
    key: "user",
    storage,
  };

  const persistedUserReducer = persistReducer(userPersistConfig, userSlice);
export const store=configureStore({
    reducer:{
        feedback:feedbackSlice,
        user:persistedUserReducer
    }
})

export const persistor = persistStore(store);