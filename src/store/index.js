import { configureStore } from '@reduxjs/toolkit';
import scoreSliceReducer from './score-slice';
import dogDataSliceReducer from './dogData-slice';
import uiSliceReducer from './ui-slice';

export const store = configureStore({
  reducer: {
    score: scoreSliceReducer,
    dogData: dogDataSliceReducer,
    ui: uiSliceReducer,
  },
});

export default store;
