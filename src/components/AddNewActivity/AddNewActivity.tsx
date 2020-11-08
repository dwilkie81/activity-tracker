import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addNewActivity } from '../../ipc/activity/sender';

const AddNewActivity: React.FC = () => {
    const [ title, setTitle ] = React.useState('');
    const [ duration, setDuration ] = React.useState(0);

    return (
        <Container>
            <Form>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        placeholder="Enter title" 
                        value={title} 
                        onChange={(event) => setTitle(event.target.value)} 
                    />
                </Form.Group>
                <Form.Group controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter duration" 
                        value={duration} 
                        onChange={(event) => setDuration(Number(event.target.value))} 
                    />
                </Form.Group>     
                <Button variant="primary" onClick={() => addNewActivity({title, duration})}>Add Entry</Button>       
            </Form>
        </Container>
    );
};

export default AddNewActivity;