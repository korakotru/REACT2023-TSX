import {
  Action,
  createSlice,
  Dispatch,
  MiddlewareAPI,
  PayloadAction,
} from "@reduxjs/toolkit";
import ITodoItem from "../types/TodoItem";
import TodoListService from "../services/TodoListService";

const initialState: {
  todoList: ITodoItem[];
} = {
  //  todoItem : TodoListService.getAll()
  //     .then((response: any) => {
  //        response.data;
  //       console.log(response.data);
  //     })
  //     .catch((e: Error) => {
  //       console.log(e);
  //     })
  todoList: [],
};
const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialState,
  reducers: {
    removeTodoItem(state, action) {
      const newTodoList = state.todoList.filter(
        (todoItem) => todoItem.id !== action.payload
      );
      state.todoList = newTodoList;
    },
  },
});

export const todoListAction = todoListSlice.actions;
export default todoListSlice.reducer;
