import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix/build/notiflix-notify-aio";
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
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label className="mb-4">
        <p className="text-sm font-semibold text-gray-600">Name</p>
        <input
          className="mb-4 w-full rounded-md border border-gray-300 p-2 focus:border-blue-300 focus:outline-none focus:ring"
          id="name"
          name="name"
          required
          placeholder="Name"
          onChange={handleChange}
        />
      </label>

      <label className="mb-4">
        <p className="text-sm font-semibold text-gray-600">Category</p>
        <select
          className="mb-4 w-full rounded-md border border-gray-300 p-2 focus:border-blue-300 focus:outline-none focus:ring"
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

      <label className="mb-4">
        <p className="text-sm font-semibold text-gray-600">Content</p>
        <input
          className="mb-4 w-full rounded-md border border-gray-300 p-2 focus:border-blue-300 focus:outline-none focus:ring"
          id="content"
          name="content"
          placeholder="Описание"
          onChange={handleChange}
        />
      </label>

      <label className="mb-4">
        <p className="text-sm font-semibold text-gray-600">Date</p>
        <input
          className="mb-4 w-full rounded-md border border-gray-300 p-2 focus:border-blue-300 focus:outline-none focus:ring"
          id="date"
          name="date"
          type="date"
          min={`1930-01-01`}
          max={`3000-12-31`}
          onChange={handleChange}
        />
      </label>

      <button
        className="duration-250 rounded-lg border-none bg-green-600 p-2 font-semibold uppercase text-white transition ease-in-out hover:bg-green-700 focus:bg-green-700"
        type="submit"
      >
        Добавить
      </button>
    </form>
  );
}

export default AddTodoForm;
