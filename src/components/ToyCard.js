import React from "react";

function ToyCard({ card, onDelete, onLike }) {
  const {id, name, image, likes} = card;

  async function handleDelete() {
    await fetch(`http://localhost:3001/toys/${id}`,
      {
        method: "DELETE",
      });

    onDelete(id);
  }

  async function handleLike() {
    const toyUrl = `http://localhost:3001/toys/${id}`;
    const response = await fetch(toyUrl);
    const toyData = await response.json();
    const updatedLikes = toyData.likes + 1;
  
    const requestBody = { likes: updatedLikes };
  
    await fetch(toyUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
  
    onLike(id, updatedLikes)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes</p>
      <button onClick={handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
