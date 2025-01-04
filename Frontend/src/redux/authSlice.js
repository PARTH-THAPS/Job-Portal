import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth', // Name of the slice
  initialState: {
    loading: false,
    user:null
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload; // Update the loading status
    },
    setUser:(state,action)=>{
    state.user=action.payload;
    }
  },
});

// Export actions to be dispatched
export const { setLoading ,setUser} = authSlice.actions;

export default authSlice.reducer;
