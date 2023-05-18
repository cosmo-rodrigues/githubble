// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../actions/userActions';

import { IUserInfo } from '../../dtos';

const initialState = {
  loading: false,
  user: [] as IUserInfo[],
  error: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
      state.error = '';
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error;
    },
  },
});
