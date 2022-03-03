import { createSlice } from '@reduxjs/toolkit'
export const promptSlice = createSlice({
  name: 'prompt',
  initialState: {
    value: {
        message: '',
        isOpen: false,
        action: '',
        newTitle: ''
    }
  },
  reducers: {
    // setMessage: (state, payload) => state.value = payload,
    promptOpenJournal: (state, action) => {
        state.value = {
            message: `Open '${action.payload}'?`,
            isOpen: true,
            action: 'OpenJournal'
        }
    },
    promptCloseWithoutSave: (state, action) => {
        state.value = {
            message: 'Close without saving? 😅',
            isOpen: true,
            action: 'NewJournal'
        }
    },
    promptCreateNewJournal: (state, action) => {
        state.value = {
            message: '',
            isOpen: true,
            action: 'NewJournal',
            newTitle: action.payload
        }
    },
    promptAccept: (state, action) => {
        state.value = {
            message: '',
            isOpen: false,
            action: action.payload
        }
    },
    promptCancel: (state, action) => {
        state.value = {
            message: '',
            isOpen: false,
            action: ''
        }
    },
    promptDeleteWarning: (state, action) => {
        state.value = {
            message: `Delete '${action.payload}'? THIS IS PERMANENT 😱`,
            isOpen: true,
            action: 'DeleteWarning'
        }
    }
  }
})

// Action creators are generated for each case reducer function
export const { promptOpenJournal, promptCloseWithoutSave, promptCreateNewJournal, promptAccept, promptCancel, promptDeleteWarning } = promptSlice.actions

export default promptSlice.reducer