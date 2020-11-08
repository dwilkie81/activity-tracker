import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { getHistory } from '../../store/history/selectors';
import { fetchHistory } from '../../ipc/history/sender';

const History: React.FC = () => {
    const history = useSelector(getHistory);

    React.useEffect(() => {
        fetchHistory();
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