import { configureStore } from '@reduxjs/toolkit';
import DetailssSlice from './DetailsSlice';
import CollectionsReducer from './CollectionsSlice';

const store = configureStore({
  reducer: {
    collectionDetails: DetailssSlice,
    collections: CollectionsReducer,
  },
});

export default store;
