import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../api/axios'; // Use your configured axios instance
import { RootState } from '../store';

interface User {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
}

interface AuthState {
  userInfo: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  userInfo: localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')!) 
    : null,
  loading: false,
  error: null
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/auth/login', credentials);
      localStorage.setItem('token', data.token);
      
      localStorage.setItem('userInfo', JSON.stringify(data.user));
      return data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || 
        err.message || 
        'Login failed. Please try again.'
      );
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      state.userInfo = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.userInfo;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;