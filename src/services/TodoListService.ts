import http from "../http-common";
import ITodoItem from "../types/TodoItem";

const getAll = () => {
  return http.get<Array<ITodoItem>>("/TodoItems");
};

const TodoListService = {
  getAll,
};
export default TodoListService;