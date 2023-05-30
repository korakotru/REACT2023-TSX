import React, { useEffect, useState } from "react";
import ITodoItem from "../../types/TodoItem";
import TodoListService from "../../services/TodoListService";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

import { Ripple } from "primereact/ripple";

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

      <div className="grid p-justify-center">
        {todoList &&
          todoList.map((todoItem, index) => (
            <div className="col-3" key={todoItem.id}>
              <div className="card flex justify-content-center align-items-center">
                <div className="bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-2 font-bold p-ripple w-full">
                  <div className=" pi pi-spin pi-cog" />
                  &nbsp;
                  {todoItem.name}
                  <Ripple />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TodoList;
