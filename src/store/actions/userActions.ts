import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../service/user';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const users = await userService.findAll();
  console.log("Users: ", users);
  return users;
});