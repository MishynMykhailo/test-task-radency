import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import { Archive, Delete, Edit } from "../../images";
import { deleteTodo, toggleArchive } from "../../redux/todoSlice";
import { toggleModal } from "../../redux/modalSlice";
import {
  getArchivePageValueState,
  getTodoValueState,
} from "../../redux/selectors";

interface TodoItem {
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

const TodoList: React.FC<TodoListProps> = ({ todoImage, setContentModal }) => {
  const dispatch = useDispatch();
  const { items } = useSelector(getTodoValueState);
  const { archivePage } = useSelector(getArchivePageValueState);

  const filteredItems = archivePage
    ? items.filter((item: TodoItem) => item.archive !== false)
    : items.filter((item: TodoItem) => item.archive !== true);

  return (
    <>
      {filteredItems.map(
        ({ id, name, created, category, content, date }: TodoItem) => (
          <tr key={id} className="odd:bg-red-100 even:bg-red-200 text-center">
            <td className="p-2">
              <span className="flex">
                <span className="mr-2">{todoImage(category)}</span>
                <p>{name}</p>
              </span>
            </td>
            <td className="p-2">{created}</td>
            <td className="p-2">{category}</td>
            <td className="p-2">{content}</td>
            <td className="p-2">
              <select
                value={date[date.length - 1]}
                className="bg-transparent outline-none"
              >
                {date
                  .slice()
                  .reverse()
                  .map((date: string) => (
                    <option key={date}>{date}</option>
                  ))}
              </select>
            </td>
            <td className="justify-center p-4 text-center">
              <button
                className="fill-current hover:text-red-500"
                type="button"
                onClick={() => {
                  dispatch(toggleModal());
                  setContentModal(<EditTodoForm idTodo={id} />);
                }}
              >
                <Edit />
              </button>
            </td>
            <td className="justify-center p-4 text-center">
              
              <button
                   className="fill-current hover:text-red-500" type="button" onClick={() => dispatch(toggleArchive(id))}>
                <Archive />
              </button>
            </td>
            <td className="justify-center p-4 text-center">
              
              <button 
                   className="fill-current hover:text-red-500"type="button" onClick={() => dispatch(deleteTodo(id))}>
                <Delete />
              </button>
            </td>
          </tr>
        ),
      )}
    </>
  );
};

export default TodoList;
