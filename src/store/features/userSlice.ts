import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../actions/userActions';

const initialState = {
  loading: false,
  user: [],
  error: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = '';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.user = [];
        state.error = action.error;
      });
  },
});
