import { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";

import ITodoItem from "../../types/TodoItem";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";
import ModalConfirm from "../Utilities/ModalConfirm";

const TodoCardItem: React.FC<{ todoItem: ITodoItem }> = ({ todoItem }) => {
  //    const [todoItem, setTodoItem] = useState<ITodoItem>(item);
  const [showModal, setIsModalShown] = useState<boolean>(false);
  
    const dispatch = useAppDispatch();
    const deleteTodoItem = () => {
            dispatch(taskaction)
    }
  return (
    <>
      {showModal && showModal ? (
        <ModalConfirm
          onClose={() => {
            setIsModalShown(false);
          }}
          onConfirm={() => {}}
          text="Confirm to delete data ?"
        />
      ) : (
        <Card variant="outlined" sx={{ maxWidth: 345 }} key={todoItem.id}>
          <CardHeader>
            <Typography gutterBottom variant="h5" component="div">
              {todoItem.id}
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {todoItem.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">
              Edit
            </Button>
            <Button variant="contained" size="small">
              Delete
            </Button>
            {/* <ToggleButtonGroup
            color="primary"
            value={todoItem.isComplete}
            exclusive
            aria-label="Platform"
          >
            <ToggleButton value="true">Task Done</ToggleButton>
          </ToggleButtonGroup> */}
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default React.memo(TodoCardItem);
