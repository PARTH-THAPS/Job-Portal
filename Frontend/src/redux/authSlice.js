import { createSlice } from '@reduxjs/toolkit';

// Create slice for authentication
const authSlice = createSlice({
  name: 'auth', // Name of the slice
  initialState: {
    loading: false, // initial state for the loading flag
  },
  reducers: {
    // Action to set loading status
    setLoading: (state, action) => {
      state.loading = action.payload; // Update the loading status
    },
  },
});

// Export actions to be dispatched
export const { setLoading } = authSlice.actions;

// Export the reducer for configuring the store
export default authSlice.reducer;
