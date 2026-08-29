import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "@/services/authService"

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, thunkAPI) => {
    try {
      const response = await authService.login(loginData)

      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Login failed"
      )
    }
  }
)

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },

  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null

      localStorage.removeItem("token")
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false

        state.user = action.payload
        state.token = action.payload.jwt

        localStorage.setItem(
          "token",
          action.payload.jwt
        )
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { logout } = authSlice.actions

export default authSlice.reducer