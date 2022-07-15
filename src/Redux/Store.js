import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/ProgressCountSlice'
import postReducer from './features/PostSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    postId: postReducer,
  },
})
