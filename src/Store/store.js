import { configureStore } from '@reduxjs/toolkit';
import userReducer from './usersSlice';
import postsReducer from './postsSlice'

export const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postsReducer
  },
});
