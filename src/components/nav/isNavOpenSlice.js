import { createSlice } from '@reduxjs/toolkit'

export const isNavOpenSlice = createSlice({
  name: 'isNavOpen',
  initialState: {
    value: false // [[title],[id]]
  },
  reducers: {
    openNav: state => state.value = true,
    closeNav: state => state.value = false
  }
})

// Action creators are generated for each case reducer function
export const { openNav, closeNav } = isNavOpenSlice.actions

export default isNavOpenSlice.reducer