import { createSlice } from '@reduxjs/toolkit';

const navDropDown = createSlice({
  name: 'navDropDown',
  initialState: {
    isOpen: false,
  },
  reducers: {
      toogleDropDown: (state) => {
        state.isOpen = !state.isOpen;
      },
      closeDropDown:(state)=>{
          state.isOpen=false;
      }
  
  },
});

export const {toogleDropDown,closeDropDown } = navDropDown.actions;
export default navDropDown.reducer;
