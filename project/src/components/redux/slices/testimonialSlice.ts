// redux/slices/testimonialSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../api/axios' // ✅ use configured instance

export const fetchTestimonials = createAsyncThunk(
  'testimonial/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/testimonials/get');
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message || 'Fetch failed');
    }
  }
);

export const fetchTestimonialById = createAsyncThunk(
  'testimonial/fetchById',
  async (id: string, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/testimonials/${id}`,{
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message || 'Fetch failed');
    }
  }
);

export const createTestimonial = createAsyncThunk(
  'testimonial/create',
  async (testimonial: any, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/testimonials', testimonial,{
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message || 'Create failed');
    }
  }
);

export const updateTestimonial = createAsyncThunk(
  'testimonial/update',
  async ({ id, testimonialData }: { id: string, testimonialData: any }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/api/testimonials/${id}`, testimonialData,{
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message || 'Update failed');
    }
  }
);

export const deleteTestimonial = createAsyncThunk(
  'testimonial/delete',
  async (id: string, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/testimonials/${id}`,{
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message || 'Delete failed');
    }
  }
);

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState: {
    testimonials: [],
    selectedTestimonial: null,
    loading: false,
    error: '',
    success: false,
  },
  reducers: {
    resetTestimonialState: (state) => {
      state.selectedTestimonial = null;
      state.loading = false;
      state.error = '';
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(fetchTestimonialById.fulfilled, (state, action) => {
        state.selectedTestimonial = action.payload;
        state.loading = false;
      })
      .addCase(createTestimonial.fulfilled, (state) => {
        state.success = true;
        state.loading = false;
      })
      .addCase(updateTestimonial.fulfilled, (state) => {
        state.success = true;
        state.loading = false;
      })
      .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetTestimonialState } = testimonialSlice.actions;
export default testimonialSlice.reducer;
