import { configureStore } from '@reduxjs/toolkit';
import CollectionsReducer from './CollectionsSlice';

const store = configureStore({
  reducer: {
    collections: CollectionsReducer,
  },
});

export default store;
