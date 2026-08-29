import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit"

import storeService from "@/services/storeService"

export const fetchStores = createAsyncThunk(
  "stores/fetchStores",
  async (_, thunkAPI) => {
    try {
      return await storeService.getAllStores()
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to fetch stores"
      )
    }
  }
)

const storeSlice = createSlice({
  name: "stores",

  initialState: {
    stores: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchStores.pending, (state) => {
        state.loading = true
      })

      .addCase(
        fetchStores.fulfilled,
        (state, action) => {
          state.loading = false
          state.stores = action.payload
        }
      )

      .addCase(
        fetchStores.rejected,
        (state, action) => {
          state.loading = false
          state.error = action.payload
        }
      )
  },
})

export default storeSlice.reducer