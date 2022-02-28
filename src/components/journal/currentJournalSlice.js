import { createSlice } from '@reduxjs/toolkit'
import { getPages } from '../../util'

export const currentJournalSlice = createSlice({
  name: 'currentJournal',
  initialState: {
    value: {
      currentTitle: '',
      currentID: '',
      pageTitles: [],
      pagesContent: [],
      isJournalOpen: false
    } // [[title],[id]]
  },
  reducers: {
    setCurrentJournal: (state, action) => {
      
      
    },
    openJournal: state => {
      state.value.isJournalOpen = true
    },
    closeJournal: state => {
      state.value.isJournalOpen = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCurrentJournal, openJournal, closeJournal } = currentJournalSlice.actions

export default currentJournalSlice.reducer