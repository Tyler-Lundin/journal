import { createSlice } from '@reduxjs/toolkit'

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: {
    value: {
      pageTitle: '',
      pageContent: ''
    }
  },
  reducers: {
    setCurrentPageTitle: (state,action) => {
      state.value.pageTitle = action.payload
    },
    setCurrentPageContent: (state,action) => {
      state.value.pageContent = action.payload
    },
    clrCurrentPage: state => {
      state.value = {
        pageTitle: '',
        pageContent: ''
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCurrentPageTitle, setCurrentPageContent, clrCurrentPage} = currentPageSlice.actions

export default currentPageSlice.reducer