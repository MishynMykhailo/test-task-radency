import React, { useState } from "react";
import s from "./EditTodoForm.module.css";

function EditTodoForm({ updateTodo, items, idTodo, categorySelect }) {
  const { name, created, category, content, date } = items.find(
    ({ id }) => id === idTodo
  );
  const [nameEdit, setNameEdit] = useState(name);
  const [createdEdit, setCreatedEdit] = useState(created);
  const [categoryEdit, setCategoryEdit] = useState(category);
  const [contentEdit, setContentEdit] = useState(content);
  const [dateEdit, setDateEdit] = useState(date);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setNameEdit(value);
        break;
      case "created":
        setCreatedEdit(value);
        break;
      case "category":
        setCategoryEdit(value);
        break;
      case "content":
        setContentEdit(value);
        break;
      case "date":
        setDateEdit(value);
        break;
      default:
    }
  };
  return (
    <form
      onSubmit={(e) => {
        updateTodo(e, {
          nameEdit,
          createdEdit,
          categoryEdit,
          contentEdit,
          dateEdit,
          idTodo,
        });
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
        />
      </label>
      <label className={s.label}>
        <p>Created</p>
        <input
          onChange={(e) => handlerChange(e)}
          className={s.input}
          id="created"
          name="created"
          value={createdEdit}
        />
      </label>
      <label className={s.label}>
        <p>Category</p>
        <select
          className={s.input}
          id="category"
          name="category"
          defaultValue={categoryEdit}
          onChange={(e) => handlerChange(e)}
        >
          <option value="Task">Task</option>
          <option value="Random Thought">Random Thought</option>
          <option value="Idea">Idea</option>
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
        />
      </label>
      <label className={s.label}>
        <p>Date</p>
        <input
          onChange={(e) => handlerChange(e)}
          className={s.input}
          id="date"
          name="date"
          value={dateEdit}
        />
      </label>
      <button className={s.btn} type="submit">
        Submit
      </button>
    </form>
  );
}

export default EditTodoForm;
