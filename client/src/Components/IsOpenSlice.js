import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleNavbar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeNav:(state)=>{
        state.isOpen=false;
    }
  },
});

export const { toggleNavbar,closeNav } = navbarSlice.actions;
export default navbarSlice.reducer;
