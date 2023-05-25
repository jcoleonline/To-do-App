import Button from 'react-bootstrap/Button';
import React from 'react';

const FavoriteButton = ({ activities }) => {
  const toggleFavorite = async (e) => {
    e.preventDefault();

    try {
        const body = { favorite: true };
        const response = await fetch(`http://localhost:5000/activity/${activities.id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        window.location = '/';
      } catch (error) {
        console.error(error.message);
      }
      };

  return (
    <div>
      <Button variant="success" onClick={toggleFavorite}>Favorite</Button>
    </div>
  );
};

export default FavoriteButton;