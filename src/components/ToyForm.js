import React from "react";

function ToyForm({ onAddToy }) {
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const form = event.target;
    const newToy = {
      name: form.elements.name.value,
      image: form.elements.image.value,
      likes: 0,
    };

    fetch(`http://localhost:3001/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((r) => r.json())
      .then((data) => onAddToy(data));
  }

  return (
    <div className="container">
      <form onSubmit={(event) => handleSubmit(event)} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
