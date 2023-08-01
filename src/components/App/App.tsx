import React, { ReactElement, useState } from "react";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import StatisticsTodo from "../StatisticsTodo/StatisticsTodo";
import Container from "../Container/Container";
import { Case, Idea, Trophy } from "../../images";
function App() {
  const [contentModal, setContentModal] = useState<ReactElement | null>(null);

  const todoImage = (category: string) => {
    if (category === "Task") {
      return <Case />;
    } else if (category === "Random Thought") {
      return <Idea />;
    } else {
      return <Trophy />;
    }
  };
  
  return (
    <>
      <Container>
        <Header setContentModal={setContentModal} todoImage={todoImage} />
        <StatisticsTodo todoImage={todoImage} />
      </Container>
      <Modal>{contentModal}</Modal>
    </>
  );
}

export default App;
