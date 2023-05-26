import React from "react";
import ITodoItem from "../../../types/TodoItem";

const TodoItem: React.FC<{ todoItem: ITodoItem }> = ({ todoItem }) => {
  return <ul>{todoItem.name}</ul>;
};

export default React.memo(TodoItem);