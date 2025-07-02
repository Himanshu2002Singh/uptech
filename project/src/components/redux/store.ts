import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './slices/courseSlice'; // ✅ Import your reducer
import teamReducer from './slices/teamSlice';
import testimonialReducer from './slices/testimonialSlice'; // ✅ Import your testimonial reducer

export const store = configureStore({
  reducer: {
    course: courseReducer, // ✅ Add here
     team: teamReducer,
     testimonial: testimonialReducer, // ✅ Add your testimonial reducer
  },
});

// For use in typed hooks (if you're using TypeScript)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
