import React from 'react';
import { Table } from 'react-bootstrap';
import { Activity } from '../../types/Activity';

const History: React.FC = () => {
    const [ history, setHistory ] = React.useState<Activity[]>([]);

    React.useEffect(() => {
        setHistory([{id: 4, title: 'My Activity', duration: 100}]);
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {history.map(({id, title, duration}) => {
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{duration}</td>
                        </tr>
                    );
                })}                                     
            </tbody>
        </Table>        
    );
};

export default History;