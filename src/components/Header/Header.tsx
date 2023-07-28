// Header.tsx

import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Header.module.css";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoList from "../TodoList/TodoList";
import { toggleModal } from "../../redux/modalSlice";
import { toggleArchivePage } from "../../redux/archivePageSlice";
import { getArchivePageValueState } from "../../redux/selectors";
import { Archive, Case, Delete, Edit, Idea, Trophy } from "../../images";

interface IProps {
  setContentModal: React.Dispatch<React.SetStateAction<ReactElement | null>>;
}

const Header: React.FC<IProps> = ({ setContentModal }) => {
  const todoImage = (category: string) => {
    if (category === "Task") {
      return <Case />;
    } else if (category === "Random Thought") {
      return <Idea />;
    } else {
      return <Trophy />;
    }
  };

  const dispatch = useDispatch();
  const { archivePage } = useSelector(getArchivePageValueState);

  return (
    <>
      <div className={s.div}>
        <div>
          <h1>{archivePage ? "Archive" : "MainTodo"}</h1>
          <table className={s.table}>
            <thead className={archivePage ? s.theadMain : s.theadArchive}>
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
              {/* Разложите элементы из TodoList с помощью оператора ... */}
              <TodoList
                todoImage={todoImage}
                setContentModal={setContentModal}
              />
            </tbody>
          </table>
          <div className={s.btnContainer}>
            <button
              className={s.btnOpen}
              type="button"
              onClick={() => {
                dispatch(toggleModal());
                setContentModal(<AddTodoForm />);
              }}
            >
              create new note
            </button>
            <button
              className={s.btnOpen}
              type="button"
              onClick={() => dispatch(toggleArchivePage())}
            >
              {archivePage ? "back to main" : "open archive"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
