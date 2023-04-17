import { configureStore } from '@reduxjs/toolkit';
import PhotosReducer from './PhotosSlice';
import CollectionsReducer from './CollectionsSlice';

const store = configureStore({
  reducer: {
    photos: PhotosReducer,
    collections: CollectionsReducer,
  }
});

export default store;
