import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    countWords: (state, action) => {
      const nodes = document.getElementsByClassName('TRANS_VALUE')
      let text = []
      for (let i = 0; i < nodes.length; i++) {
        text = [...text, nodes[i].value]
      }
      const count = text.join(' ').trim().split(/\s+/).length
      state.value = count
    },
  },
})

// Action creators are generated for each case reducer function
export const { countWords } = counterSlice.actions

export default counterSlice.reducer
