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
    promptOpenJournal: (state, action) => {
        state.value = {
            message: `Open '${action.payload}'?`,
            isOpen: true
        }
    },
    promptCloseWithoutSave: (state, payload) => {
        state.value = {
            message: 'Close without saving? 😅',
            isOpen: true
        }
    },
    promptAccept: (state) => {
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
export const { promptOpenJournal, promptCloseWithoutSave, promptAccept, promptCancel } = promptSlice.actions

export default promptSlice.reducer