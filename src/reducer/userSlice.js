import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message;
      })
  }
})

export const fetchLogin = createAsyncThunk(
  'user/fetchLogin', 
  async ({ email, password }) => {
    const response = await fetch(`/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.result
  }
)

export default userSlice.reducer
