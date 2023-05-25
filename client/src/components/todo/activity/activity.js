import "./activity.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import EditActivity from "../editActivity/editActivity";
import CompleteButton from "../complete-button/complete-button";
import FavoriteButton from "../favoriteButton/favoriteButton";


const Activity = () => {
  const [activities, setActivities] = useState([]);

  //delete function

  const deleteActivity = async (id) => {
    try {
      const deleteActivity = await fetch(
        `http://localhost:5000/activity/${id}`,
        {
          method: "delete",
        });
    setActivities(activities.filter(activities => activities.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getActivity = async () => {
    try {
      const response = await fetch("http://localhost:5000/activity");
      const jsonData = await response.json();

      setActivities(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getActivity();
  }, []);

  console.log(activities);

  const filteredActivities = activities.filter(activity => !activity.completed);

  return (
    <div className="todoList">
      <table className="table-container">
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Favorite</th>
          <th>Delete</th>
          <th>Completed</th>
        </tr>
        {filteredActivities.map((activities) => (
          <tr key={activities.id}>
            <td>{activities.title}</td>
            <td>{activities.details}</td>
            <td>
              <EditActivity activities={activities} />
            </td>
            <td>
              <FavoriteButton activities={activities} />
            </td>
            <td>
              <Button
                variant="danger"
                onClick={() => deleteActivity(activities.id)}
              >
                Delete
              </Button>{" "}
            </td>
            <td>
              <CompleteButton activities={activities} />
              {/* <Button variant="outline-dark">Complete</Button> */}
                          </td>
          </tr>
        ))}
      </table>
          </div>
  );
};

export default Activity;
