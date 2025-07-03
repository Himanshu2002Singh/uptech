import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './slices/courseSlice';
import teamReducer from './slices/teamSlice';
import testimonialReducer from './slices/testimonialSlice';
import enrollReducer from './slices/enrollSlice';
import authReducer from './slices/authSlice'; // <-- Add this import

export const store = configureStore({
  reducer: {
    course: courseReducer,
    team: teamReducer,
    testimonial: testimonialReducer,
    enroll: enrollReducer,
    auth: authReducer, // <-- Add this line
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;