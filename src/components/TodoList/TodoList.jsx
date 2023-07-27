import React from "react";
import s from "./TodoList.module.css";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import { Archive, Delete, Edit } from "../../images";
function TodoList({
  items,
  todoImage,
  openModal,
  toggleArchive,
  deleteTodo,
  updateTodo,
  categorySelect,
}) {
  return items.map(
    ({ id, name, created, category, content, date }) => {
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
            <select className={s.select}  value={date[date.length - 1]} readOnly>
              {date
                .slice()
                .reverse()
                .map((date) => (
                  <option key={date}>{date}</option>
                ))}
            </select>
          </td>
          <td className={s.td}>
            <button
              type="button"
              className={s.btn}
              onClick={() =>
                openModal(
                  <EditTodoForm
                    updateTodo={updateTodo}
                    items={items}
                    idTodo={id}
                    categorySelect={categorySelect}
                  />
                )
              }
            >
              <Edit />
            </button>
          </td>
          <td className={s.td}>
            <button
              type="button"
              className={s.btn}
              onClick={() => toggleArchive(id)}
            >
              <Archive />
            </button>
          </td>
          <td className={s.td}>
            <button
              type="button"
              className={s.btn}
              onClick={() => deleteTodo(id)}
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
