import { configureStore,combineReducers } from '@reduxjs/toolkit';
import {persistReducer,persistStore} from 'redux-persist';
import navbarReducer from './IsOpenSlice.js';
import showHeaderSlice from './userSlice/loginSlice.js'
import userReducer from './userSlice/userSlice.js';
import storage from 'redux-persist/lib/storage'
import deviceTypeReducer from './userSlice/deviceTypeSlice.js';
import userDataReducer from "./userSlice/userData.js";
import { showHeader } from './userSlice/loginSlice.js';
import navDropDown from './userSlice/navDropDown.js'

const rootReducer= combineReducers({navbar: navbarReducer,
  user:userReducer,
  showHeader:showHeaderSlice,
  deviceType:deviceTypeReducer,
  userData:userDataReducer,
  navDropDown:navDropDown})

const persistConfig={key:'root',storage,version:1}

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false,
  }),

});


export const persist=persistStore( store);
