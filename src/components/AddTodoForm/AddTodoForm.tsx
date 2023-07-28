import React, { useState, ChangeEvent, FormEvent } from "react";
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

  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [date, setDate] = useState<string[]>([]);
  const [archive, setArchive] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
        setArchive(Boolean(value));
        break;

      default:
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length <= 0) {
      Notify.failure("Заполните поле 'Name'");
    } else if (category.length <= 0) {
      Notify.failure("Заполните поле 'Category'");
    } else {
      dispatch(addTodo({ name, category, content, date, archive }));
      dispatch(toggleModal());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        <p>Name</p>
        <input
          className={s.input}
          id="name"
          name="name"
          required
          placeholder="Name"
          onChange={handleChange}
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
          onChange={handleChange}
        >
          <option value="def" disabled>
            Выберите категорию
          </option>
          {categoryList.map((category: string) => {
            return (
              <option key={category} value={category}>
                {category}
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
          placeholder="Описание"
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </label>
      <button className={s.btn} type="submit">
        Добавить
      </button>
    </form>
  );
}

export default AddTodoForm;
