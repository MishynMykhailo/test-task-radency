import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoList from "../TodoList/TodoList";
import { toggleModal } from "../../redux/modalSlice";
import { toggleArchivePage } from "../../redux/archivePageSlice";
import { getArchivePageValueState } from "../../redux/selectors";
import { Archive, Delete, Edit } from "../../images";

interface IProps {
  setContentModal: React.Dispatch<React.SetStateAction<ReactElement | null>>;
  todoImage: (category: string) => ReactElement;
}

const Header: React.FC<IProps> = ({ setContentModal,todoImage }) => {
  const dispatch = useDispatch();
  const { archivePage } = useSelector(getArchivePageValueState);

  return (
    <>
      <div>
        <div>
          <h1 className="text-center text-xl mb-4 mt-4">
            {archivePage ? "Archive" : "MainTodo"}
          </h1>
          <table className="w-full">
            <thead className={archivePage ? "bg-gray-500" : "bg-red-500 "}>
              <tr>
                <th className="justify-center rounded-tl-lg text-center text-white">
                  Name
                </th>
                <th className="justify-center text-center text-white">
                  Created
                </th>
                <th className="justify-center text-center text-white">
                  Category
                </th>
                <th className="justify-center text-center text-white">
                  Content
                </th>
                <th className="justify-center text-center text-white">Dates</th>
                <th className="justify-center fill-white p-4 text-center">
                  <Edit />
                </th>
                <th className="justify-center fill-white p-4 text-center">
                  <Archive />
                </th>
                <th className="justify-center rounded-tr-lg fill-white p-4 text-center">
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
          <div className="mb-4 mt-4">
            <button
              className=" mr-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300  "
              type="button"
              onClick={() => {
                dispatch(toggleModal());
                setContentModal(<AddTodoForm />);
              }}
            >
              create new note
            </button>
            <button
              className={
                archivePage
                  ? "mr-2 rounded-lg bg-gray-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 "
                  : " mr-2 rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300  "
              }
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
