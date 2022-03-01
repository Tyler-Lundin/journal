import { createSlice } from '@reduxjs/toolkit'
import { getPages } from '../../util'

export const pagesListSlice = createSlice({
  name: 'pagesList',
  initialState: {
    value: [[],[]]
  },
  reducers: {
    setPageList: (state, action) => {
      state.value = (action.payload)
    },
    addNewPage: (state) => {
      state.value[0].push('Page Title 🙂')
      state.value[1].push('Page 🙂')
    },
    editPageTitle: (state, action) => {
      state.value[0][action.payload.index] = action.payload.title
    },
    editPageContent: (state, action) => {
      state.value[1][action.payload.index] = action.payload.content
    },
    clrPagesList: state => {
      state.value = [[],[]]
    }
  }
})

// Action creators are generated for each case reducer function
export const { setPageList, addNewPage, editPageTitle, editPageContent, clrPagesList } = pagesListSlice.actions

export default pagesListSlice.reducer