import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyCards, setToyCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch toy data.");
        }
        return r.json();
      })
      .then((data) => setToyCards(data))
      .catch((error) => console.log(error.message));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToyCards((prevToys) => [...prevToys, newToy]);
  }

  function handleRemoveToy(toyID) {
    const newList = toyCards.filter((toy) => toy.id !== toyID);
    setToyCards(newList);
  }

  function handleLikeToy(toyID, addedLike) {
    const newList = toyCards.map((element) =>
      element.id === toyID ? { ...element, "likes": addedLike} : element
    );
    setToyCards(newList);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toyCards={toyCards}
        onDelete={handleRemoveToy}
        onLike={handleLikeToy}
      />
    </>
  );
}

export default App;
