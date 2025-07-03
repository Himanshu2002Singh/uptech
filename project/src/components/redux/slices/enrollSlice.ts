import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// 👉 Submit course enrollment form
export const submitEnrollment = createAsyncThunk(
  'enroll/submitEnrollment',
  async (enrollmentData, thunkAPI) => {
    try {
      const res = await axios.post('/api/mail/enroll', enrollmentData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Enrollment failed');
    }
  }
);

export const submitConsultancyForm = createAsyncThunk(
  'enroll/consultancy',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('/api/mail/send-consultancy-email', data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Submission failed');
    }
  }
);


// 👉 Submit engineering consultancy form

const enrollSlice = createSlice({
  name: 'enroll',
  initialState: {
    loading: false,
    success: false,
    error: '',
  },
  reducers: {
    resetEnrollState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // Course enrollment form
      .addCase(submitEnrollment.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(submitEnrollment.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitEnrollment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Consultancy submission form
      .addCase(submitConsultancyForm.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(submitConsultancyForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitConsultancyForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetEnrollState } = enrollSlice.actions;
export default enrollSlice.reducer;
