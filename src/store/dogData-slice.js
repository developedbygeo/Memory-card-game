import { createSlice } from '@reduxjs/toolkit';
import { shuffleArray } from '../components/shared/utils';

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
    clickOnCard(state, action) {
      const clickedObject = state.data.find((object) => object.key === action.payload.id);
      clickedObject.clicked = true;
      state.data = shuffleArray(state.data);
    },
    resetFlags(state) {
      state.data.map((object) => (object.clicked = false));
    },
  },
});

export const dogSliceActions = dogData.actions;

export default dogData.reducer;
