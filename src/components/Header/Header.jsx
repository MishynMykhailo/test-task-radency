import React from "react";
import s from "./Header.module.css";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import { Archive, Case, Delete, Edit, Idea, Trophy } from "../../images";
import TodoList from "../TodoList/TodoList";

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
  const todoImage = (category) => {
    if (category === "Task") {
      return <Case />;
    } else if (category === "Random Thought") {
      return <Idea />;
    } else {
      return <Trophy />;
    }
  };
  const archiveItems = items.filter(({ archive }) => archive !== false);
  const notArchiveItems = items.filter(({ archive }) => archive !== true);
  return (
    <>
      <div className={s.div}>
        <div>
          <h1>{drawArchiveTodo ? "Archive" : "MainTodo"}</h1>
          <table className={s.table}>
            <thead className={drawArchiveTodo ? s.theadMain : s.theadArchive}>
              <tr className={s.tr}>
                <th className={s.th}>Name</th>
                <th className={s.th}>Created</th>
                <th className={s.th}>Category</th>
                <th className={s.th}>Content</th>
                <th className={s.th}>Dates</th>
                <th className={s.th}>
                  <Edit />
                </th>
                <th className={s.th}>
                  <Archive />
                </th>
                <th className={s.th}>
                  <Delete />
                </th>
              </tr>
            </thead>
            <tbody>
              <TodoList
                items={drawArchiveTodo ? archiveItems : notArchiveItems}
                todoImage={todoImage}
                openModal={openModal}
                toggleArchive={toggleArchive}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                categorySelect={categorySelect}
              />
            </tbody>
          </table>
          <div className={s.btnContainer}>
            <button
              className={s.btnOpen}
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
            <button
              className={s.btnOpen}
              type="button"
              onClick={() => filterArchiveTodo()}
            >
              open archive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
