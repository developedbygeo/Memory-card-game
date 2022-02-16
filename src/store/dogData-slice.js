import { createSlice } from '@reduxjs/toolkit';

const initialDataState = {
  fetched: false,
  data: [],
};

const dogData = createSlice({
  name: 'fetchedData',
  initialState: initialDataState,
  reducers: {
    updateDogData(state, action) {
      state.fetched = true;
      state.data = action.payload.data;
    },
  },
});

export const dogDataActions = dogData.actions;

export default dogData.reducer;
