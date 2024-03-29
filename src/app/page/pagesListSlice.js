import { createSlice } from '@reduxjs/toolkit'

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
      state.value[0].push('NEW PAGE 📄')
      state.value[1].push('Type here! ⌨')
    },
    editPageTitle: (state, action) => {
      state.value[0] = action.payload
    },
    editPageContent: (state, action) => {
      state.value[1] = action.payload
    },
    clrPagesList: state => {
      state.value = [[],[]]
    }
  }
})

// Action creators are generated for each case reducer function
export const { setPageList, addNewPage, editPageTitle, editPageContent, clrPagesList } = pagesListSlice.actions

export default pagesListSlice.reducer