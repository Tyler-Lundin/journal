import { createSlice } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
  name: 'unsavedChanges',
  initialState: {
    value: true
  },
  reducers: {
    toggle: (state, action) => {state.value = action.payload}
  }
})

// Action creators are generated for each case reducer function
export const { toggle } = darkModeSlice.actions

export default darkModeSlice.reducer