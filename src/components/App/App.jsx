import { useState } from "react";
import Header from "../Header/Header.jsx";
import Modal from "../Modal/Modal";
import StatisticsTodo from "../StatisticsTodo/StatisticsTodo.jsx";
import Container from "../Container/Container.jsx";

function App() {
  const [contentModal, setContentModal] = useState(null);
  return (
    <>
      <Container>
        <Header setContentModal={setContentModal} />
        <StatisticsTodo />
      </Container>
      <Modal>{contentModal}</Modal>
    </>
  );
}

export default App;
