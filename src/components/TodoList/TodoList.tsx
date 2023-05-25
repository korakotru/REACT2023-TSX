import React, { useEffect, useState } from "react";
import ITodoItem from "../../types/TodoItem";
import TodoListService from "../../services/TodoListService";

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState<Array<ITodoItem>>([]);
  
    useEffect(() => {
    retrieveTodoList();
  }, []);

      const retrieveTodoList = () => {
        TodoListService.getAll()
          .then((response: any) => {
            setTodoList(response.data);
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
    
  return (
    <>
      <h4>Todo List</h4>

      <ul className="list-group">
        {todoList &&
          todoList.map((todoItem, index) => (
            <li key={todoItem.id}>
                  {todoItem.name} - {todoItem.isComplete ? "Completed" : "In-Complete"}
            </li>
          ))}
      </ul> 
    </>
  );
};

export default TodoList 