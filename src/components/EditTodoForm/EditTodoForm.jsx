import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./EditTodoForm.module.css";
import { updateTodo } from "../../redux/todoSlice";
import {
  getCategorySelectValueState,
  getTodoValueState,
} from "../../redux/selectors";
import { toggleModal } from "../../redux/modalSlice";

function EditTodoForm({ idTodo }) {
  const { items } = useSelector(getTodoValueState);
  const { categoryList } = useSelector(getCategorySelectValueState);
  const { name, category, content, date, id } = items.find(
    ({ id }) => id === idTodo
  );
  const dispatch = useDispatch();
  const [nameEdit, setNameEdit] = useState(name);
  const [categoryEdit, setCategoryEdit] = useState(category);
  const [contentEdit, setContentEdit] = useState(content);
  const [dateEdit, setDateEdit] = useState(date);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setNameEdit(value);
        break;
      case "category":
        console.log(category);
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
            nameEdit,
            categoryEdit,
            contentEdit,
            dateEdit,
          })
        );
        dispatch(toggleModal());
      }}
      className={s.form}
    >
      <label className={s.label}>
        <p>Name</p>
        <input
          onChange={(e) => handlerChange(e)}
          className={s.input}
          id="name"
          name="name"
          value={nameEdit}
          placeholder="Name"
          required
        />
      </label>

      <label className={s.label}>
        <p>Category</p>
        <select
          className={s.input}
          id="category"
          name="category"
          onChange={(e) => handlerChange(e)}
          required
          defaultValue="def"
        >
          <option value="def" disabled>
            Choose your category
          </option>
          {categoryList.map((e) => {
            return (
              <option key={e} value={e} readOnly>
                {e}
              </option>
            );
          })}
        </select>
      </label>
      <label className={s.label}>
        <p>Content</p>
        <input
          onChange={(e) => handlerChange(e)}
          className={s.input}
          id="content"
          name="content"
          value={contentEdit}
          placeholder="Description"
        />
      </label>
      <label className={s.label}>
        <p>Date</p>
        <input
          onChange={(e) => handlerChange(e)}
          className={s.input}
          id="date"
          name="date"
          type="date"
          min={`1930-01-01`}
          max={`3000-12-31`}
        />
      </label>
      <button className={s.btn} type="submit">
        Edit todo
      </button>
    </form>
  );
}

export default EditTodoForm;
