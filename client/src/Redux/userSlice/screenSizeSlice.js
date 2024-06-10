import { createSlice } from '@reduxjs/toolkit';

const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState: {
    innerWidth: 1920,
    outerWidth: 1920,
    innerHeight: 1920,
    outerHeight: 1920,
  },
  reducers: {
    setSize: (state,data) => {
      state.innerWidth = data.payload['innerWidth'];
      state.innerHeight=data.payload['innerHeight'];
      state.outerHeight=data.payload['outerHeight'];
      state.outerWidth=data.payload['outerWidth'];
    },
  },
});

export const { setSize } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;
