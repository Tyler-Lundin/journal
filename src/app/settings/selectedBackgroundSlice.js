import { createSlice } from '@reduxjs/toolkit'

export const selectedBackgroundSlice = createSlice({
  name: 'selectedBackground',
  initialState: {
    value: 0
  },
  reducers: {
    setBackground: (state, action) => {state.value = action.payload}
  }
})

// Action creators are generated for each case reducer function
export const { setBackground } = selectedBackgroundSlice.actions

export default selectedBackgroundSlice.reducer