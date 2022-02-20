import { createSlice } from '@reduxjs/toolkit';

const initialScoreState = {
  savedBestScore: 0,
  bestScore: 0,
  currentScore: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState: initialScoreState,
  reducers: {
    increment(state) {
      state.currentScore += 1;
      if (state.currentScore > state.bestScore) {
        state.bestScore += 1;
      }
    },
    lost(state) {
      if (state.bestScore > state.savedBestScore) {
        state.savedBestScore = state.currentScore;
      }
      state.currentScore = 0;
    },
    reset() {
      return initialScoreState;
    },
  },
});

export const scoreSliceActions = scoreSlice.actions;

export default scoreSlice.reducer;
