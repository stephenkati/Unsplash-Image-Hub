import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likes: [],
};

const LikeSlice = createSlice({
  name: 'Likes',
  initialState,
});

export default LikeSlice.reducer;
