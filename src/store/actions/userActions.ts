import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../service/user';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (queryString: string) => {
  return (await userService.findAll(queryString)).data;
});
