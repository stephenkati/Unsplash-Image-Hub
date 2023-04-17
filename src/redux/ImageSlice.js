import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: [],
};

const ImageSlice = createSlice({
  name: 'images',
  initialState,
});

export default ImageSlice.reducer;
