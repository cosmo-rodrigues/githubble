import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../service/user';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  return await userService.findAll();
});