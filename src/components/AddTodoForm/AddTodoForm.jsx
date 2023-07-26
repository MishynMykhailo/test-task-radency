import React, { useState } from "react";
import s from "./AddTodoForm.module.css";

function AddTodoForm({ createTodo, categorySelect }) {
  const [name, setName] = useState("");
  const [created, setCreated] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [archive, setArchive] = useState("");
  const [edit, setEdit] = useState("");

  const handlerChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "created":
        setCreated(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "content":
        setContent(value);
        break;
      case "date":
        setDate(value);
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
  return (
    <form
      onSubmit={(e) =>
        createTodo(e, { name, created, category, content, date, archive, edit })
      }
      onChange={(e) => handlerChange(e)}
      className={s.form}
    >
      <label className={s.label}>
        <p>Name</p>
        <input className={s.input} id="name" name="name" />
      </label>
      <label className={s.label}>
        <p>Created</p>
        <input className={s.input} id="created" name="created" />
      </label>
      <label className={s.label}>
        <p>Category</p>
        <select className={s.input} id="category" name="category">
          {categorySelect.map((e) => {
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
        <input className={s.input} id="content" name="content" />
      </label>
      <label className={s.label}>
        <p>Date</p>
        <input className={s.input} id="date" name="date" />
      </label>
      <button className={s.btn} type="submit">
        Submit
      </button>
    </form>
  );
}

export default AddTodoForm;
