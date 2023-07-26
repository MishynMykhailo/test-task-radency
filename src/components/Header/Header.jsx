import React from "react";
import s from "./Header.module.css";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
function Header({
  openModal,
  items,
  updateTodo,
  createTodo,
  deleteTodo,
  categorySelect,
  toggleArchive,
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
                <th>Edit</th>
                <th>Arvice</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((e) => {
                  if (!e.archive) {
                    return (
                      <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.created}</td>
                        <td>{e.category}</td>
                        <td>{e.content}</td>
                        <td>{e.date}</td>
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
      </div>
    </>
  );
}

export default Header;
