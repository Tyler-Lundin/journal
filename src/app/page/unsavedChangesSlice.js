import { createSlice } from '@reduxjs/toolkit'

export const unsavedChangesSlice = createSlice({
  name: 'unsavedChanges',
  initialState: {
    value: false 
  },
  reducers: {
    unsaved: state => state.value = true,
    saved: state => state.value = false
  }
})

// Action creators are generated for each case reducer function
export const { unsaved, saved } = unsavedChangesSlice.actions

export default unsavedChangesSlice.reducer