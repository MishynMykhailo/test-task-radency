import { useState } from "react";
import Header from "../Header/Header.jsx";
import Modal from "../Modal/Modal";
import s from "./App.module.css";
import StatisticsTodo from "../StatisticsTodo/StatisticsTodo.jsx";
import { nanoid } from "nanoid";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const categorySelect = ["Task", "Random Thought", "Idea"];

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Shopping List",
      created: "APril 20",
      category: "Task",
      content: "tomatos",
      date: "date",
      archive: true,
      edit: "false",
      deleteTodo: "false",
    },
    {
      id: 2,
      name: "The teory evolute",
      created: "APril 20",
      category: "Task",
      content: "drink",
      date: "date",
      archive: false,
      edit: "false",
      deleteTodo: "false",
    },
    {
      id: 3,
      name: "book it ",
      created: "APril 20",
      category: "Task",
      content: "tomatos",
      date: "date",
      archive: false,
      edit: "false",
      deleteTodo: "false",
    },
  ]);

  const createTodo = (
    e,
    { name, created, category, content, date, archive, edit }
  ) => {
    e.preventDefault();
    setItems((prevState) => {
      return [
        ...prevState,
        {
          id: nanoid(),
          name,
          created,
          category,
          content,
          date,
          archive,
          edit,
        },
      ];
    });
    toggleModal();
  };
  const deleteTodo = (e) => {
    e.preventDefault();
    setItems((prevState) => {
      return prevState.filter(({ id }) => e !== id);
    });
  };
  const updateTodo = (
    e,
    { nameEdit, createdEdit, categoryEdit, contentEdit, idTodo }
  ) => {
    e.preventDefault();
    setItems((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === idTodo) {
          return {
            ...todo,
            name: nameEdit,
            created: createdEdit,
            category: categoryEdit,
            content: contentEdit,
          };
        }
        return todo;
      });
    });
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const toggleArchive = (id) => {
    setItems((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            archive: !todo.archive,
          };
        }
        return todo;
      });
    });
  };

  const openModal = (content) => {
    setModalContent(content);
    toggleModal();
  };
  return (
    <>
      <div className={s.App}>
        <Header
          createTodo={createTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          items={items}
          toggleModal={() => toggleModal()}
          openModal={openModal}
          modalContent={modalContent}
          categorySelect={categorySelect}
          toggleArchive={toggleArchive}
        />
      </div>
      <div>
        <StatisticsTodo items={items} categorySelect={categorySelect} />
      </div>
      <Modal showModal={showModal} toggleModal={toggleModal}>
        {modalContent}
      </Modal>
    </>
  );
}

export default App;
