import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  Axios  from 'axios'

export const getPosts = createAsyncThunk(
  'Store/getPosts',
  async (userId, dispatch, getState) => {
    const response = await Axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    return response.data
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState:{
    posts: [],
    status: null
  },
  reducers: {
  },
  extraReducers:{
    [getPosts.pending]: (state, action)=>{
      state.status = 'loading'
    },
    [getPosts.fulfilled]: (state, action)=>{
      state.posts = action.payload
      state.status = 'success'
    },
    [getPosts.rejected]: (state, action)=>{
      state.status = 'failed'
    },
  }
});


export default postsSlice.reducer;
