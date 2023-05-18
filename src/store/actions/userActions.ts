import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../service/user';

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (queryString: string) => {
    return (await userService.findAll(queryString)).data;
  }
);

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (login: string) => {
    return (await userService.findByUserName(login)).data;
  }
);

export const fetchUserRepos = createAsyncThunk(
  'user/fetchUserRepos',
  async (login: string) => {
    return (await userService.findAllRepositoriesByUserName(login)).data;
  }
);
