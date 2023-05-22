import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ACCESS_KEY;
const unsplashUrl = 'https://api.unsplash.com';
const collections = 'collections';

const fetchCollections = createAsyncThunk(
  'images/fetchCollections',
  async (page) => {
    const response = await fetch(`${unsplashUrl}/${collections}?page=${page}&per_page=30&client_id=${CLIENT_ID}`);
    const data = await response.json();
    return data;
  },
);

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
        }));

        return {
          ...state,
          collections,
        };
      });
  },
});

export { fetchCollections };
export default CollectionsSlice.reducer;
