import { createSlice } from '@reduxjs/toolkit'

export const journalsListSlice = createSlice({
  name: 'journalsList',
  initialState: {
    value: {
      journalTitles: [],
      journalIDs: []
    }
  },
  reducers: {
    setJournalsList: (state, action) => {
      state.value = action.payload
    },
    clrJournalsList: state => {
      state.value = {
        journalTitles: [],
        journalIDs: []
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { loadJournalsList, setJournalsList, clrJournalsList } = journalsListSlice.actions

export default journalsListSlice.reducer