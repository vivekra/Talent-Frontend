import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'counter',
  initialState: {
    spinner: false
  },
  reducers: {
    setSpinner: (state, action) => {
      state.spinner = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setSpinner } = homeSlice.actions

export default homeSlice.reducer