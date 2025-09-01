import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      (state.user = action.payload), (state.isAuthenticated = true);
    },
    refreshAccessToken: (state, action) => {
      if (state.user) {
        state.user.access = action.payload; // update only access token
      }
    },
    logout: (state) => {
      (state.user = null), (state.isAuthenticated = false);
    },
  },
});

export const { loginSuccess, logout, refreshAccessToken } = authSlice.actions;
export default authSlice.reducer;