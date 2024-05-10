import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: {},
  },
  reducers: {
    setUserData: (state,data) => {
      state.userData = data;
    },
  },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
