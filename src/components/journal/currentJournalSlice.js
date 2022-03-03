import { createSlice } from '@reduxjs/toolkit'

export const currentJournalSlice = createSlice({
  name: 'currentJournal',
  initialState: {
    value: {
      currentTitle: '',
      currentID: '',
      isJournalOpen: false,
      pageAmount: 0
    } 
  },
  reducers: {
    setCurrentJournalTitle: (state, action) => {
      state.value.currentTitle = action.payload
    },
    setCurrentJournalID: (state, action) => {
      state.value.currentID = action.payload
    },
    setCurrentJournalPageAmount: (state, action) => {
      state.value.pageAmount = action.payload
    },
    openJournal: state => {
      state.value.isJournalOpen = true
    },
    closeJournal: state => {
      state.value.isJournalOpen = false
    },
    clrCurrentJournal: state => state.value == {
      currentTitle: '',
      currentID: '',
      isJournalOpen: false,
      pageAmount: 0
    } 
  }
})

// Action creators are generated for each case reducer function
export const { setCurrentJournalTitle, setCurrentJournalID, setCurrentJournalPageAmount, openJournal, closeJournal, clrCurrentJournal } = currentJournalSlice.actions

export default currentJournalSlice.reducer