import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../../api/axios' // ✅ use configured instance
import { Course } from '../../../types'; // 👈 import this

interface CourseState {
  courses: Course[];
    selectedCourse?: Course | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}


const initialState: CourseState = {
  courses: [],
   selectedCourse: null,
  loading: false,
  error: null,
  success: false,
};

// Thunks

export const getCourses = createAsyncThunk<Course[]>('courses/get', async () => {
  const response = await axios.get('/api/courses/get');
  
  console.log('Fetched courses:', response.data);
  return response.data || [];
});

export const deleteCourse = createAsyncThunk<string, string>('courses/delete', async (id) => {
  await axios.delete(`/api/courses/${id}`);
  return id;
});



export const createCourse = createAsyncThunk('courses/create', async (courseData) => {
  const response = await axios.post('/api/courses', courseData,{
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
  return response.data;
});

export const updateCourse = createAsyncThunk(
  'courses/update',
  async (
    { id, courseData }: { id: string; courseData: Partial<Course> }
  ) => {
    const response = await axios.put(`/api/courses/${id}`, courseData);
    return response.data;
  }
);


// 🔁 Fetch Single Course by ID
export const fetchCourseById = createAsyncThunk<Course, string>(
  'courses/fetchById',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/api/courses/${id}`);
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.error || 'Failed to fetch course');
    }
  }
);



// Slice
const courseSlice = createSlice({
  name: 'courses',
  initialState: initialState,
  reducers: {
    resetCourseState: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch courses';
      })
       .addCase(fetchCourseById.pending, (state) => {
        state.loading = true;
        state.selectedCourse = null;
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCourse = action.payload;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.success = true;
        state.courses.push(action.payload);
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.success = true;
        const index = state.courses.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter((c) => String(c.id) !== action.payload);
      });
  },
});

export const { resetCourseState } = courseSlice.actions;
export default courseSlice.reducer;
