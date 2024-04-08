import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './IsOpenSlice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});

export default store;
