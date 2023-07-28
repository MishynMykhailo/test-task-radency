import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./TodoList.module.css";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import { Archive, Delete, Edit } from "../../images";
import { deleteTodo, toggleArchive } from "../../redux/todoSlice";
import { toggleModal } from "../../redux/modalSlice";
import {
  getArchivePageValueState,
  getTodoValueState,
} from "../../redux/selectors";

interface TodoItemData {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  date: string[];
  archive: boolean;
}

interface TodoListProps {
  todoImage: (category: string) => ReactElement;
  setContentModal: (content: ReactElement) => void;
}

function TodoList({ todoImage, setContentModal }: TodoListProps) {
  const dispatch = useDispatch();
  const { items } = useSelector(getTodoValueState);
  const { archivePage } = useSelector(getArchivePageValueState);

  const filteredItems = archivePage
    ? items.filter((item: TodoItemData) => item.archive !== false)
    : items.filter((item: TodoItemData) => item.archive !== true);

  return filteredItems.map(
    ({ id, name, created, category, content, date }: TodoItemData) => {
      return (
        <tr key={id} className={s.tr}>
          <td className={s.td}>
            <span className={s.containerForName}>
              <span className={s.containerImg}>{todoImage(category)}</span>
              <p className={s.containerP}>{name}</p>
            </span>
          </td>
          <td className={s.td}>{created}</td>
          <td className={s.td}>{category}</td>
          <td className={s.td}>{content}</td>
          <td className={s.td}>
            <select className={s.select} value={date[date.length - 1]}>
              {date
                .slice()
                .reverse()
                .map((date: string) => (
                  <option key={date}>{date}</option>
                ))}
            </select>
          </td>
          <td className={s.td}>
            <button
              type="button"
              className={s.btn}
              onClick={() => {
                dispatch(toggleModal());
                setContentModal(<EditTodoForm idTodo={id} />);
              }}
            >
              <Edit />
            </button>
          </td>
          <td className={s.td}>
            <button
              type="button"
              className={s.btn}
              onClick={() => dispatch(toggleArchive(id))}
            >
              <Archive />
            </button>
          </td>
          <td className={s.td}>
            <button
              type="button"
              className={s.btn}
              onClick={() => dispatch(deleteTodo(id))}
            >
              <Delete />
            </button>
          </td>
        </tr>
      );
    }
  );
}

export default TodoList;
