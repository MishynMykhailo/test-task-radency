import React, { ReactElement, useState } from "react";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import StatisticsTodo from "../StatisticsTodo/StatisticsTodo";
import Container from "../Container/Container";

function App() {
  const [contentModal, setContentModal] = useState<ReactElement | null>(null);
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
