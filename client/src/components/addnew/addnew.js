import { useState } from 'react';
import './addnew.css';
import Button from 'react-bootstrap/Button';

const NewTask = ({onHandleSubmit}) => {
    const [title, setTitle ] = useState('')
    const [details, setDetails ] = useState('')
    
    const handleSubmit = async(event) => {
        event.preventDefault();
              try {
            const body = { title, details, completed: false, favorite: false };
            const response = await fetch("http://localhost:5000/activity",{
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message)
        }
    };

    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <label>
                    New:
                    <input type='text' value={title} className='New' onChange={(event) => setTitle(event.target.value)} />
                    Details:
                    <input type='text' value={details} className='Details' onChange={(event) => setDetails(event.target.value)} />
                </label>
                <Button className='add' size="sm" variant="primary" type='submit'>Add</Button>{' '}
            </form>
        </div>
    );
};

export default NewTask;