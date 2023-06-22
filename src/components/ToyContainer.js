import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyCards, onDelete, onLike }) {
  return (
    <div id="toy-collection">
      {toyCards.map((card) => (
        <ToyCard card={card} onDelete={onDelete} onLike={onLike} />
      ))}
    </div>
  );
}

export default ToyContainer;
