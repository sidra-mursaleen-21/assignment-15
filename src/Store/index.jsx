import { configureStore } from '@reduxjs/toolkit'
import Todolist from './Reducer/Todolist';

const store = configureStore({
  reducer: {
    todolist: Todolist,
  }
})

export default store;