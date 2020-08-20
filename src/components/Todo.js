import React, { useState } from "react";
import { db } from "../firebase";
import { Modal, makeStyles, Button, ListSubheader } from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import "./Todo.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    border: "none",
  },
  paper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(true);
  };
  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <div className="container">
      <div className="todo">
        <div className="todo__item">
          <Modal
            className={classes.modal}
            open={open}
            onClose={(e) => setOpen(false)}
          >
            <div className={classes.paper}>
              <h3>Edit</h3>
              <div className="input_modal">
                <input
                  className="input_"
                  placeholder={props.todo.todo}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={updateTodo}
                >
                  Update Todo
                </Button>
              </div>
            </div>
          </Modal>
          {/* <List className=" list">
        <ListItem className="list__text" alignItems="center">
          <ListItemText className={classes.root} primary={props.todo.todo} />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteForeverRoundedIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List> */}
          <div className="container">
            <div className="card">
              <p>{props.todo.todo}</p>
              <EditRoundedIcon
                style={{ color: "blue" }}
                onClick={(e) => setOpen(true)}
              >
                Edit
              </EditRoundedIcon>

              <DeleteForeverRoundedIcon
                style={{ color: "red", padding: 15 }}
                onClick={(event) =>
                  db.collection("todos").doc(props.todo.id).delete()
                }
              />
            </div>
          </div>
        </div>
        {/* <li>{props.todo}</li> */}
      </div>
    </div>
  );
}

export default Todo;
