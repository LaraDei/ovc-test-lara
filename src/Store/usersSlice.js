import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  Axios  from 'axios'

export const getUsers = createAsyncThunk(
  'Store/getUsers',
  async (dispatch, getState) => {
    const response = await Axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data
  }
);
export const filterUsers = createAction(
  'Store/updateValueByName',
    (term, category, list)=>{
      const result = list.filter(item => 
        item[category].toLowerCase().includes(term)
    )
    return{
      payload: result
    }}
)
export const usersSlice = createSlice({
  name: 'users',
  initialState:{
    users: [],
    status: null
  },
  reducers: {
  },
  extraReducers:{
    [getUsers.pending]: (state, action)=>{
      state.status = 'loading'
    },
    [getUsers.fulfilled]: (state, action)=>{
      state.users = action.payload
      state.status = 'success'
    },
    [getUsers.rejected]: (state, action)=>{
      state.status = 'failed'
    },
  }
});


export default usersSlice.reducer;
