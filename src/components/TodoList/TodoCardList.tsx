import React, { useEffect, useState } from "react";
import ITodoItem from "../../types/TodoItem";
import TodoListService from "../../services/TodoListService";
import TodoCardItem from "../TodoList/TodoCardItem";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";




const TodoCardList: React.FC = () => {
  const [todoCardList, setTodoList] = useState<Array<ITodoItem>>([]);

  useEffect(() => {
    retrieveTodoCardList();
  }, []);

  const retrieveTodoCardList = () => {
    TodoListService.getAll()
      .then((response: any) => {
        setTodoList(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  //const handleChange_TaskDone = (
  //  event: React.MouseEvent<HTMLElement>,
  //  todoItem: ITodoItem
  //) => {
  //  setTodoList(todoItem);
  //};

  return (
  
      <Container maxWidth="md">
        <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
          {todoCardList &&
            todoCardList.map((todoItem, index) => (
              <Grid item xs={4} key={todoItem.id}>
                <TodoCardItem todoItem={todoItem} />
              </Grid>
            ))}
        </Grid>
      </Container>
  );
};

export default TodoCardList;
