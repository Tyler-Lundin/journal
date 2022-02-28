import { createSlice } from '@reduxjs/toolkit'

export const isNavOpenSlice = createSlice({
  name: 'isNavOpen',
  initialState: {
    value: false // [[title],[id]]
  },
  reducers: {
    openNav: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    },
    closeNav: state => {
      
    }
  }
})

// Action creators are generated for each case reducer function
export const { openNav, closeNav } = isNavOpenSlice.actions

export default isNavOpenSlice.reducer