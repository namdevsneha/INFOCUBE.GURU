import { createSlice } from '@reduxjs/toolkit';

const showHeaderSlice = createSlice({
  name: 'showHeader',
  initialState: {
    showheader: true,
  },
  reducers: {
    hideHeader: (state) => {
      state.showheader = false;
    },
    showHeader:(state)=>{
        state.showheader=true;
    }
  },
});

export const { hideHeader,showHeader } = showHeaderSlice.actions;
export default showHeaderSlice.reducer;
