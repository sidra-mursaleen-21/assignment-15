import { createSlice } from "@reduxjs/toolkit";

const Todolist = createSlice({
  name: "todo list",
  initialState: {
    todoList: [],
  },
  reducers: {
    Savetodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    Deletetodo: (state, action) => {
      let i = action.payload;
      state.todoList.splice(i, i + 1);
    },
    Savechanges: (state, action) => {
      const {index, todo} = action.payload
      state.todoList[index] = todo;

    }
  },
});

export default Todolist.reducer;

export const { Savetodo, Deletetodo, Savechanges } = Todolist.actions;
