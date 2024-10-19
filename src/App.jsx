import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const cards = ["red", "purple", "gray"];
  return (
    <>
      {cards.map((card) => (
        <Card key={card.cards} color={card} />
      ))}
    </>
  );
}

export default App;
