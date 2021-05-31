import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth data',
  initialState: {
    data: {},
    loading:false
  },
  reducers: {
    setUser: (state,action) => {
      state.data = action.payload
    },
    setLoading: (state,action) => {
        state.loading = action.payload
    },
  }
})

export const { setUser, setLoading} = authSlice.actions

export default authSlice.reducer;

