import { useState } from "react";
import Header from "../Header/Header.jsx";
import Modal from "../Modal/Modal";
import StatisticsTodo from "../StatisticsTodo/StatisticsTodo.jsx";
import { nanoid } from "nanoid";
import Container from "../Container/Container.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [drawArchiveTodo, setDrawArchiveTodo] = useState(false);
  const categorySelect = ["Task", "Random Thought", "Idea"];
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Shopping List",
      created: "27.07.2023, 03:34:51",
      category: "Task",
      content: "tomatos",
      date: [],
      archive: true,
      edit: "false",
      deleteTodo: "false",
    },
    {
      id: 2,
      name: "The teory evolute",
      created: "27.07.2023, 03:35:51",
      category: "Task",
      content: "drink",
      date: [],
      archive: false,
      edit: "false",
      deleteTodo: "false",
    },
    {
      id: 3,
      name: "New Test",
      created: "27.07.2023, 03:33:51",
      category: "Idea",
      content: "tomatosasdlm",
      date: [],
      archive: false,
      edit: "false",
      deleteTodo: "false",
    },
    {
      id: "L72_R_aFUBIfIzrq6CgO5",
      name: "test task1",
      created: "27.07.2023, 03:32:52",
      category: "Random Thought",
      content: "empty",
      date: [],
      archive: false,
      edit: false,
    },
    {
      id: "bDJKttxUZELllczsD5CJt",
      name: "Radency test 1",
      created: "27.07.2023, 03:34:26",
      category: "Idea",
      content: "Radency test 1",
      date: ["29/07/2023"],
      archive: false,
      edit: false,
    },
    {
      id: "GAqq2zh3DFScs3xxxH-JY",
      name: "Finished ths task",
      created: "27.07.2023, 03:34:23",
      category: "Random Thought",
      content: "test",
      date: ["01/07/2023", "02/07/2023"],
      archive: false,
      edit: false,
    },
    {
      id: "GAqq2zh3DFSc232322-JY",
      name: "Last Todo for this task",
      created: "27.07.2023, 03:34:23",
      category: "Random Thought",
      content: "test",
      date: ["02/07/2023", "06/07/2023"],
      archive: false,
      edit: false,
    },
  ]);
  // Create Todo
  const createTodo = (e, formData) => {
    e.preventDefault();
    setItems((prevState) => {
      return [
        ...prevState,
        {
          id: nanoid(),
          created: new Date().toLocaleString(),
          ...formData,
        },
      ];
    });
    toggleModal();
  };
  // Delete Todo
  const deleteTodo = (id) => {
    setItems((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };
  //  Update TODO
  const updateTodo = (e, formData) => {
    e.preventDefault();
    setItems((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === formData.idTodo) {
          return {
            ...todo,
            created: new Date().toLocaleString(),
            ...formData,
          };
        }
        return todo;
      });
    });
    toggleModal();
  };
  // Show/Close Modal
  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };
  //  Archive page
  const filterArchiveTodo = () => {
    setDrawArchiveTodo((prevState) => !prevState);
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
      <Container>
        <Header
          createTodo={createTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          items={items}
          toggleModal={toggleModal}
          openModal={openModal}
          categorySelect={categorySelect}
          toggleArchive={toggleArchive}
          filterArchiveTodo={filterArchiveTodo}
          drawArchiveTodo={drawArchiveTodo}
        />
        <StatisticsTodo items={items} categorySelect={categorySelect} />
      </Container>
      <Modal showModal={showModal} toggleModal={toggleModal}>
        {modalContent}
      </Modal>
    </>
  );
}

export default App;
