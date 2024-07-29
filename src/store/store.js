import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from '../reducers/todolist/todoListSlice'

export const store = configureStore({
  reducer: {todolist:todoListSlice},
})