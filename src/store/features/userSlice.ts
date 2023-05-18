// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, fetchUserRepos, fetchUsers } from '../actions/userActions';

import { IRepository, IUserInfo } from '../../dtos';

const initialState = {
  loading: false,
  users: [] as IUserInfo[],
  currentUser: {} as IUserInfo,
  currentUserRepos: [] as IRepository[],
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
      state.currentUser = {};
      state.currentUserRepos = [];
      const newUsers = action.payload.filter((newUser) => {
        return !state.users.some((user) => user.login === newUser.login);
      });
      state.users = [...state.users, ...newUsers];
      state.currentPage++;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error;
    },
    [fetchUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      state.currentUser = {};
      state.error = action.error;
    },
    [fetchUserRepos.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserRepos.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUserRepos = action.payload;
    },
    [fetchUserRepos.rejected]: (state, action) => {
      state.loading = false;
      state.currentUserRepos = [];
      state.error = action.error;
    }
  },
});
