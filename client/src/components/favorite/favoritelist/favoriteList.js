import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import EditActivity from "../../todo/editActivity/editActivity";
import CompleteButton from "../../todo/complete-button/complete-button";

const FavoriteList = () => {
  const [activities, setActivities] = useState([]);

  //delete function

  const deleteActivity = async (id) => {
    try {
      const deleteActivity = await fetch(
        `http://localhost:5000/activity/${id}`,
        {
          method: "delete",
        }
      );
      setActivities(activities.filter((activities) => activities.id !== id));
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

  const filteredActivities = activities.filter(
    (activity) => activity.favorite
  );

  return (
    <div className="todoList">
      <table className="table-container">
        <tr>
          <th>Title</th>
          <th>Delete</th>
        </tr>
        {filteredActivities.map((activities) => (
          <tr key={activities.id}>
            <td>{activities.title}</td>
            <td>
              <Button
                variant="danger"
                onClick={() => deleteActivity(activities.id)}
              >
                Delete
              </Button>{" "}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default FavoriteList;
