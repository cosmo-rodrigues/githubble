// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../actions/userActions';

import { IUserInfo } from '../../dtos';

const initialState = {
  loading: false,
  user: [] as IUserInfo[],
  error: {},
  currentPage: 1,
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
      const newUsers = action.payload.filter((newUser) => {
        return !state.user.some((user) => user.id === newUser.id);
      });
      state.user = [...state.user, ...newUsers];
      state.currentPage++;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error;
    },
  },
});
