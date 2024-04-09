import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './IsOpenSlice.js';
import userReducer from './userSlice/userSlice.js';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    user:userReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false,
  }),

});

export default store;
