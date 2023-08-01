import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../../redux/todoSlice";
import {
  getCategorySelectValueState,
  getTodoValueState,
} from "../../redux/selectors";
import { toggleModal } from "../../redux/modalSlice";

interface IProps {
  idTodo: string;
}

interface TodoItemData {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  date: string[];
  archive: boolean;
}

const EditTodoForm: React.FC<IProps> = ({ idTodo }) => {
  const { items } = useSelector(getTodoValueState);
  const { categoryList } = useSelector(getCategorySelectValueState);
  const { name, category, content, date, id } = items.find(
    (item: TodoItemData) => item.id === idTodo,
  )!;
  const dispatch = useDispatch();
  const [nameEdit, setNameEdit] = useState<string>(name);
  const [categoryEdit, setCategoryEdit] = useState<string>(category);
  const [contentEdit, setContentEdit] = useState<string>(content);
  const [dateEdit, setDateEdit] = useState<string[]>(date);

  const handlerChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setNameEdit(value);
        break;
      case "category":
        setCategoryEdit(value);
        break;
      case "content":
        setContentEdit(value);
        break;
      case "date":
        const [year, month, day] = value.split("-");
        setDateEdit((prevState) => {
          return [...prevState, `${day}/${month}/${year}`];
        });
        break;
      default:
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          updateTodo({
            id,
            name: nameEdit,
            category: categoryEdit,
            content: contentEdit,
            date: dateEdit,
          }),
        );
        dispatch(toggleModal());
      }}
      className="flex flex-col"
    >
      <label className="mb-4">
        <p>Name</p>
        <input
          onChange={handlerChange}
          className="w-full mb-4 rounded-md border border-gray-300 p-2 focus:border-blue-300 focus:outline-none focus:ring"
          id="name"
          name="name"
          value={nameEdit}
          placeholder="Name"
          required
        />
      </label>

      <label className="mb-4">
        <p>Category</p>
        <select
          className="w-full mb-4 rounded-md border border-gray-300 p-2 focus:border-blue-300 focus:outline-none focus:ring"
          id="category"
          name="category"
          onChange={handlerChange}
          required
          defaultValue="def"
        >
          <option value="def" disabled>
            Choose your category
          </option>
          {categoryList.map((category: string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label className="mb-4">
        <p>Content</p>
        <input
          onChange={handlerChange}
          className="mb-4 w-full rounded-md border border-gray-300 p-2 focus:border-blue-300 focus:outline-none focus:ring"
          id="content"
          name="content"
          value={contentEdit}
          placeholder="Description"
        />
      </label>

      <label className="mb-4">
        <p>Date</p>
        <input
          onChange={handlerChange}
          className="mb-4 w-full rounded-md border border-gray-300 p-2 focus:border-blue-300 focus:outline-none focus:ring"
          id="date"
          name="date"
          type="date"
          min="1930-01-01"
          max="3000-12-31"
        />
      </label>

      <button
        className="duration-250 rounded-lg border-none bg-orange-600 p-2 font-semibold uppercase text-white transition ease-in-out hover:bg-orange-700 focus:bg-orange-700"
        type="submit"
      >
        Edit todo
      </button>
    </form>
  );
};

export default EditTodoForm;
