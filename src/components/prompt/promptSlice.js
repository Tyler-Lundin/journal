import { createSlice } from '@reduxjs/toolkit'

export const promptSlice = createSlice({
  name: 'prompt',
  initialState: {
    value: {
        message: '',
        isOpen: false
    }
  },
  reducers: {
    // setMessage: (state, payload) => state.value = payload,
    openJournalPrompt: (state, payload) => {
        state.value = {
            message: `Open Journal ${payload.selectedJournalTitle}?`,
            isOpen: true
        }
    },
    closeWithoutSaving: (state, payload) => {
        state.value = {
            message: 'Close without saving? 😅',
            isOpen: true
        }
    },
    promptAccept: (state, payload) => {
        state.value = {
            message: '',
            isOpen: false
        }
    },
    promptCancel: (state, payload) => {
        state.value = {
            message: '',
            isOpen: false
        }
    }
  }
})

// Action creators are generated for each case reducer function
export const { setMessage } = promptSlice.actions

export default promptSlice.reducer