import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const client_id = 'valzMN3FcMkKioFDdD3i_lq8Zpd3G1lkE7aO8Y2eUAE';
const unsplashUrl = 'https://api.unsplash.com';
const collections = 'collections';

const fetchPhotos = createAsyncThunk(
  'images/fetchPhotos',
  async (collectionID) => {
  const response = await axios(`${unsplashUrl}/${collections}/${collectionID}/photos/?client_id=${client_id}`);
  // console.log(Object.values(response.data));
  return Object.values(response.data);
});

const initialState = {
  photos: [],
};

const PhotosSlice = createSlice({
  name: 'Likes',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      const photos = action.payload.map((picture) => ({
        ...picture,
      }))

      return {
        ...state,
        photos: photos,
      }
    })
  }
});

export { fetchPhotos };
export default PhotosSlice.reducer;
