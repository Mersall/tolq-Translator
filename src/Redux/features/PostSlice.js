import { createSlice } from '@reduxjs/toolkit'

export const PostSlice = createSlice({
  name: 'postId',
  initialState: {
    value: 0,
  },
  reducers: {
    passId: (state, action) => {
      const id = action.payload
      state.value = id
    },
  },
})

// Action creators are generated for each case reducer function
export const { passId } = PostSlice.actions

export default PostSlice.reducer
