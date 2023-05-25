import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import "./editActivity.css"

const EditActivity = ( {activities} ) => {
  const [title, setTitle] = useState(activities.title);
  const [details, setDetails] = useState(activities.details);

  //edit activity function

  const updateActivity = async e => {
    e.preventDefault();
    try {
        const body = { title, details };
        const response = await fetch(`http://localhost:5000/activity/${activities.id}`, 
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })

        window.location = '/';
    } catch (error) {
        console.error(error.message)
    }
  };

      const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
    <Button variant="primary" onClick={handleShow}>
      Edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body><div><input type='text' className='Title' value={title} onChange={e => 
        setTitle(e.target.value)}>
            </input><input type='text' className='Detail' value={details} onChange={e => 
        setDetails(e.target.value)}></input></div></Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={e => updateActivity(e)}>
          Save Changes
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        </Modal.Footer>
    </Modal>
  </>
        );
  };
  
  export default EditActivity;