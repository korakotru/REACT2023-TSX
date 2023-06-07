import axios from "../http-common";
import ITodoItem from "../types/TodoItem";

const getAll = () => {
  return axios.get<Array<ITodoItem>>("/TodoItems");
};

const getById = (id:number) => {
  return axios.get<Array<ITodoItem>>(`/TodoItems/${id}`);
};

const create = (data:ITodoItem) => {
  return axios.post<any>("/TodoItems",data);
};

const update = (data:ITodoItem) => {
  return axios.put<any>("/TodoItems",data);
};

const removeById = (id:number) => {
  return axios.delete<any>(`/TodoItems/${id}`);
};
const removeAll = (id: number) => {
  return axios.delete<any>(`/TodoItems`);
};

const TodoListService = {
  getAll,
  getById,
  create,
  update,
  removeById,
  removeAll,
};
export default TodoListService;
 