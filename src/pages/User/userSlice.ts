import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { signIn } from './userThunk';

export interface UserState {
  userInfo: {
    bio: string;
    email: string;
    image: string;
    token: string;
    username: string;
  };
  isLoading: boolean;
  error: any;
}

const initialState: UserState = {
  userInfo: {
    bio: '',
    email: '',
    image: '',
    token: '',
    username: ''
  },
  isLoading: false,
  error: {}
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.userInfo = {
        bio: '',
        email: '',
        image: '',
        token: '',
        username: ''
      };
    },
    setUser: (state, action) => {
      state.userInfo = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reset, setUser } = userSlice.actions;

export const getUser = (state: RootState) => state.user.userInfo;
export const getStatus = (state: RootState) => state.user.isLoading;

export default userSlice.reducer;
