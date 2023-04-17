import { configureStore } from '@reduxjs/toolkit';
import LikeReducer from './LikeSlice';
import ImageReducer from './ImageSlice';

const store = configureStore({
  reducer: {
    likes: LikeReducer,
    images: ImageReducer,
  }
});

export default store;
