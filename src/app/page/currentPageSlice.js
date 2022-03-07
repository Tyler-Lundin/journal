import { createSlice } from '@reduxjs/toolkit'

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: {
    value: {
      pageTitle: '',
      pageContent: '',
      pageIndex: 0
    }
  },
  reducers: {
    setCurrentPageTitle: (state,action) => {
      state.value.pageTitle = action.payload
    },

    setCurrentPageContent: (state,action) => {
      state.value.pageContent = action.payload
    },

    setCurrentPageIndex: (state, action) => {
      state.value.pageIndex = action.payload
    },

    clrCurrentPage: state => {
      state.value = {
        pageTitle: '',
        pageContent: '',
        pageIndex: 0
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCurrentPageTitle, setCurrentPageContent, setCurrentPageIndex, clrCurrentPage} = currentPageSlice.actions

export default currentPageSlice.reducer