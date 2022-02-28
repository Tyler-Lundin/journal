import { createSlice } from '@reduxjs/toolkit'

export const currentJournalSlice = createSlice({
  name: 'currentJournal',
  initialState: {
    value: {
      currentTitle: '',
      currentID: '',
      pageTitles: [],
      pagesContent: [],
      isJournalOpen: false
    } 
  },
  reducers: {
    setCurrentJournalTitle: (state, action) => {
      state.value.currentTitle = action.payload
    },
    setCurrentJournalID: (state, action) => {
      state.value.currentID = action.payload
    },
    // setPageTitles: (state, action) => {
    //   state.value = action.payload
    // },
    // setPageContent: (state, action) => {
    //   state.value = action.payload
    // },
    openJournal: state => {
      state.value.isJournalOpen = true
    },
    closeJournal: state => {
      state.value.isJournalOpen = false
    },
    clrCurrentJournal: state => state.value == null
  }
})

// Action creators are generated for each case reducer function
export const { setCurrentJournalTitle, setCurrentJournalID, openJournal, closeJournal, clrCurrentJournal } = currentJournalSlice.actions

export default currentJournalSlice.reducer