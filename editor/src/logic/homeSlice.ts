import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'sampleState',
  initialState: {
    value: 'Default State Value'
  },
  reducers: {
    setSampleState: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setSampleState } = slice.actions

export default slice.reducer
