import { createSlice } from '@reduxjs/toolkit';

const deviceTypeSlice = createSlice({
  name: 'deviceType',
  initialState: {
    deviceType: 'lg',
  },
  reducers: {
    changeDevice: (state) => {
      state.deviceType = false;
      if(window.innerWidth < 768){
        state.deviceType='sm'
      }else if(window.innerWidth<1024){
        state.deviceType='md'
      }else{
        state.deviceType='lg'
      }
    },
  
  },
});

export const {changeDevice } = deviceTypeSlice.actions;
export default deviceTypeSlice.reducer;
