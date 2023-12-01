import { createAsyncThunk } from '@reduxjs/toolkit';
import TokenService from 'services/token.service';
import UserService from 'services/user.service';
import { user } from 'types/user.interface';

export const signIn = createAsyncThunk('user/signIn', async (data: user) => {
  try {
    const res = await UserService.signIn(data);
    TokenService.setUser(res.data.user);
    return res.data.user;
  } catch (error) {
    return error;
  }
});
