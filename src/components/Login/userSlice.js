import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null
  },
  reducers: {
    setUser: (state, action) => {
        state.value = action.payload
        console.log('SET USER: ', action.payload)
    },
    clearUser: (state) => {
        state.value = null
        console.log('User logged out! 🙂')
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer