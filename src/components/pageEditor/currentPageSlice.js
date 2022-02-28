import { createSlice } from '@reduxjs/toolkit'

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: {
    value: [[],[]] // [[title],[id]]
  },
  reducers: {
    loadCurrentPage: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    },
    reloadCurrentPage: state => {
      
    },
    clearCurrentPage: state => state.value = [[],[]]
  }
})

// Action creators are generated for each case reducer function
export const { loadCurrentPage, reloadCurrentPage, clearCurrentPage} = currentPageSlice.actions

export default currentPageSlice.reducer