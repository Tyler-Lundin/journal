import { createSlice } from '@reduxjs/toolkit'
import { getPages } from '../../util'

export const pagesListSlice = createSlice({
  name: 'pagesList',
  initialState: {
    value: [[],[]]
  },
  reducers: {
    loadPages: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      getPages(action)
    },
    clearPagesList: state => {
      state.value = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { loadPages, clearPagesList } = pagesListSlice.actions

export default pagesListSlice.reducer