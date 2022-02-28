import { createSlice } from '@reduxjs/toolkit'
import { getJournals } from '../../util'

export const journalsListSlice = createSlice({
  name: 'journalsList',
  initialState: {
    value: {
      journalTitles: [],
      journalIDs: []
    }
  },
  reducers: {
    loadJournalsList: (state, payload) => {
    },
    setJournalsList: (state, action) => {
      state.value = action.payload
    },
    clrJournalsList: state => {
      state.value = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { loadJournalsList, setJournalsList, clrJournalsList } = journalsListSlice.actions

export default journalsListSlice.reducer