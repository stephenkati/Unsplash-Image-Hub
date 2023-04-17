import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const client_id = 'valzMN3FcMkKioFDdD3i_lq8Zpd3G1lkE7aO8Y2eUAE';
const unsplashUrl = 'https://api.unsplash.com';
const collections = 'collections';

const fetchCollections = createAsyncThunk(
  'images/fetchCollections',
  async () => {
  const response = await axios(`${unsplashUrl}/${collections}/?client_id=${client_id}`);
  return Object.values(response.data);
});

const initialState = {
  collections: [],
};

const CollectionsSlice = createSlice({
  name: 'collections',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchCollections.fulfilled, (state, action) => {
      const collections = action.payload.map((collect) => ({
        ...collect,
      }))

      return {
        ...state,
        collections: collections,
      }
    })
  }
});

export { fetchCollections };
export default CollectionsSlice.reducer;
