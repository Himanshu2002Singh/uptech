// teamSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../../api/axios' // ✅ use configured instance
import { isAxiosError } from 'axios';
import { TeamMember } from '../../../types';

interface TeamState {
  members: TeamMember[];
    selectedMember?: TeamMember | null;
  loading: boolean;
  error: string | null;
}

const initialState: TeamState = {
  members: [],
  loading: false,
  error: null,
};

// ========== GET ALL ==========
export const fetchTeamMembers = createAsyncThunk(
  'team/fetchTeamMembers',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/team/get');
      return res.data;
    } catch (err: unknown) {
      if (isAxiosError(err) && err.response) {
        return thunkAPI.rejectWithValue(err.response.data?.error || 'Something went wrong');
      }
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

// ========== CREATE ==========
export const createTeamMember = createAsyncThunk(
  'team/createTeamMember',
  async (memberData: Omit<TeamMember, 'id'>, thunkAPI) => {
    try {
      const res = await axios.post('/api/team', memberData,{
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
      return res.data;
    } catch (err: unknown) {
      if (isAxiosError(err) && err.response) {
        return thunkAPI.rejectWithValue(err.response.data?.error || 'Failed to create team member');
      }
      return thunkAPI.rejectWithValue('Failed to create team member');
    }
  }
);


export const fetchTeamMemberById = createAsyncThunk(
  'team/fetchById',
  async (id: number, thunkAPI) => {
    try {
      const res = await axios.get(`/api/team/${id}`,{
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
      return res.data;
    } catch (err: unknown) {
      if (isAxiosError(err) && err.response) {
        return thunkAPI.rejectWithValue(err.response.data?.error || 'Failed to fetch team member');
      }
      return thunkAPI.rejectWithValue('Failed to fetch team member');
    }
  }
);

export const updateTeamMember = createAsyncThunk(
  'team/updateTeamMember',
  async (
    { id, updatedData }: { id: number; updatedData: Partial<TeamMember> },
    thunkAPI
  ) => {
    try {
      const res = await axios.put(`/api/team/${id}`, updatedData,{
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.error || 'Failed to update team member');
    }
  }
);


// ========== DELETE ==========
export const deleteTeamMember = createAsyncThunk(
  'team/deleteTeamMember',
  async (id: number, thunkAPI) => {
    try {
      await axios.delete(`/api/team/${id}`,{
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
      return id;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.error || 'Failed to delete team member');
    }
  }
);

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all
      .addCase(fetchTeamMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeamMembers.fulfilled, (state, action) => {
        state.members = action.payload;
        state.loading = false;
      })
      .addCase(fetchTeamMembers.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      // Create
      .addCase(createTeamMember.fulfilled, (state, action) => {
        state.members.unshift(action.payload);
      })
       .addCase(fetchTeamMemberById.fulfilled, (state, action) => {
  state.selectedMember = action.payload;
})
.addCase(updateTeamMember.fulfilled, (state, action) => {
  const index = state.members.findIndex((m) => m.id === action.payload.id);
  if (index !== -1) state.members[index] = action.payload;
})

      

      // Delete
      .addCase(deleteTeamMember.fulfilled, (state, action) => {
        state.members = state.members.filter((m) => m.id !== action.payload);
      });
  },
});

export default teamSlice.reducer;
