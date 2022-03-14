import { createSlice } from '@reduxjs/toolkit'

export const fontSizeSlice = createSlice({
  name: 'fontSize',
  initialState: {
    value: 1
  },
  reducers: {
    setMultiplyer: (state, action) => {state.value = action.payload}
  }
})

// Action creators are generated for each case reducer function
export const { setMultiplyer } = fontSizeSlice.actions

export default fontSizeSlice.reducer