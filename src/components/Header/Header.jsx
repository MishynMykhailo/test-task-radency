import React from "react";
import s from "./Header.module.css";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import { Archive, Delete, Edit } from "../../images";

function Header({
  openModal,
  items,
  updateTodo,
  createTodo,
  deleteTodo,
  categorySelect,
  toggleArchive,
  filterArchiveTodo,
  drawArchiveTodo,
}) {
  return (
    <>
      <div className={s.div}>
        <div>
          <table className={s.table}>
            <thead className={s.thead}>
              <tr>
                <th>Name</th>
                <th>Created</th>
                <th>Category</th>
                <th>Content</th>
                <th>Dates</th>
                <th>
                  <Edit />
                </th>
                <th>
                  <Archive />
                </th>
                <th>
                  <Delete />
                </th>
              </tr>
            </thead>
            <tbody>
              {drawArchiveTodo
                ? items.map(
                    ({
                      id,
                      name,
                      created,
                      category,
                      content,
                      archive,
                      date,
                    }) => {
                      if (archive) {
                        return (
                          <tr key={id}>
                            <td>{name}</td>
                            <td>{created}</td>
                            <td>{category}</td>
                            <td>{content}</td>
                            <td>
                              <select value={date[date.length - 1]} readOnly>
                                {date
                                  .slice()
                                  .reverse()
                                  .map((date) => (
                                    <option key={date}>{date}</option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <button
                                type="button"
                                className={s.btnEdit}
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
                                edit
                              </button>
                            </td>
                            <td>
                              <button
                                type="button"
                                className={s.btnEdit}
                                onClick={() => toggleArchive(id)}
                              >
                                archive
                              </button>
                            </td>
                            <td>
                              <button
                                type="button"
                                className={s.btnDelete}
                                onClick={() => deleteTodo(id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      }
                      return "";
                    }
                  )
                : items.map((e) => {
                    if (!e.archive) {
                      return (
                        <tr key={e.id}>
                          <td>{e.name}</td>
                          <td>{e.created}</td>
                          <td>{e.category}</td>
                          <td>{e.content}</td>
                          <td>
                            <select value={e.date[e.date.length - 1]} readOnly>
                              {e.date
                                .slice()
                                .reverse()
                                .map((date) => (
                                  <option key={date}>{date}</option>
                                ))}
                            </select>
                          </td>
                          <td>
                            <button
                              type="button"
                              className={s.btnEdit}
                              onClick={() =>
                                openModal(
                                  <EditTodoForm
                                    updateTodo={updateTodo}
                                    items={items}
                                    idTodo={e.id}
                                    categorySelect={categorySelect}
                                  />
                                )
                              }
                            >
                              edit
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              className={s.btnEdit}
                              onClick={() => toggleArchive(e.id)}
                            >
                              archive
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              className={s.btnDelete}
                              onClick={() => deleteTodo(e.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    }
                    return "";
                  })}
            </tbody>
          </table>
        </div>
        <button
          type="button"
          onClick={() =>
            openModal(
              <AddTodoForm
                createTodo={createTodo}
                categorySelect={categorySelect}
              />
            )
          }
        >
          create new note
        </button>
        <button type="button" onClick={() => filterArchiveTodo()}>
          open archive
        </button>
      </div>
    </>
  );
}

export default Header;
