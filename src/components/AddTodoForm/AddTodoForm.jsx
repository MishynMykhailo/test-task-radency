import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import s from "./AddTodoForm.module.css";
import { getCategorySelectValueState } from "../../redux/selectors";
import { addTodo } from "../../redux/todoSlice";
import { toggleModal } from "../../redux/modalSlice";

Notify.init({
  width: "300px",
  position: "right-bottom",
  closeButton: false,
  clickToClose: true,
  timeout: 2000,
});

function AddTodoForm() {
  const { categoryList } = useSelector(getCategorySelectValueState);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState([]);
  const [archive, setArchive] = useState(Boolean);
  const [edit, setEdit] = useState(Boolean);
  // Change input in form
  const handlerChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "content":
        setContent(value);
        break;
      case "date":
        const [year, month, day] = value.split("-");
        setDate([`${day}/${month}/${year}`]);
        break;
      case "archive":
        setArchive(value);
        break;
      case "edit":
        setEdit(value);
        break;
      default:
    }
  };

  const validForm = ({ name, category }) => {
    if (name.length <= 0) {
      return Notify.failure("fill in the field 'Name'");
    } else if (category.length <= 0) {
      return Notify.failure("fill in the field 'Category'");
    } else {
      dispatch(addTodo({ name, category, content, date, archive, edit }));
      dispatch(toggleModal());
    }
  };
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validForm({ name, category, content });
      }}
      onChange={(e) => handlerChange(e)}
      className={s.form}
    >
      <label className={s.label}>
        <p>Name</p>
        <input
          className={s.input}
          id="name"
          name="name"
          required
          placeholder="Name"
        />
      </label>

      <label className={s.label}>
        <p>Category</p>
        <select
          className={s.input}
          id="category"
          name="category"
          required
          defaultValue="def"
        >
          <option value="def" disabled>
            Choose your category
          </option>
          {categoryList.map((e) => {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </select>
      </label>
      <label className={s.label}>
        <p>Content</p>
        <input
          className={s.input}
          id="content"
          name="content"
          placeholder="Description"
        />
      </label>
      <label className={s.label}>
        <p>Date</p>
        <input
          className={s.input}
          id="date"
          name="date"
          type="date"
          min={`1930-01-01`}
          max={`3000-12-31`}
        />
      </label>
      <button className={s.btn} type="submit">
        Submit
      </button>
    </form>
  );
}

export default AddTodoForm;
