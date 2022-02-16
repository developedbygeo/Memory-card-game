import { createSlice } from '@reduxjs/toolkit';

const initialScoreState = {
  bestScore: 0,
  currentScore: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState: initialScoreState,
  reducers: {
    increment(state) {
      state.currentScore += 1;
      state.bestScore += 1;
    },
    lost(state) {
      state.currentScore = 0;
    },
  },
});

export const scoreActions = scoreSlice.actions;

export default scoreSlice.reducer;
