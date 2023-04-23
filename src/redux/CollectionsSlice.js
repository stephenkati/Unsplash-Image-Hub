import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const client_id = process.env.REACT_APP_CLIENT_ACCESS_KEY;
const unsplashUrl = 'https://api.unsplash.com';
const collections = 'collections';

const fetchCollections = createAsyncThunk(
  'images/fetchCollections',
  async () => {
    const response = await axios(`${unsplashUrl}/${collections}?page=17&per_page=30&client_id=${client_id}`);
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
