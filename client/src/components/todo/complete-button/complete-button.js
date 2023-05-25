import Button from 'react-bootstrap/Button';
import React from 'react';

const CompleteButton = ({ activities }) => {
  const toggleCompleted = async (e) => {
    e.preventDefault();

    try {
        const body = { completed: true };
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
      <Button variant="outline-dark" onClick={toggleCompleted}>Completed</Button>
    </div>
  );
};

export default CompleteButton;