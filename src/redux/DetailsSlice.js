import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const client_id = 'valzMN3FcMkKioFDdD3i_lq8Zpd3G1lkE7aO8Y2eUAE';
const unsplashUrl = 'https://api.unsplash.com';
const collections = 'collections';

const fetchCollectionDetails = createAsyncThunk(
  'images/fetchPhotos',
  async (collectionID) => {
  const response = await axios(`${unsplashUrl}/${collections}/${collectionID}/?client_id=${client_id}`);
  // console.log(response.data);
  return response.data;
});

const initialState = {
  collectionDetails: [],
};

const DetailssSlice = createSlice({
  name: 'Photos',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCollectionDetails.fulfilled, (state, action) => {
      return {
        ...state,
        collectionDetails: action.payload,
      }
    })
  }
});

export { fetchCollectionDetails };
export default DetailssSlice.reducer;
