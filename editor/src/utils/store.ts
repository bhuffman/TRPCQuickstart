import { configureStore } from '@reduxjs/toolkit'
import sampleState from '../logic/homeSlice'

export default configureStore({
  reducer: {
    sampleState: sampleState
  }
})
