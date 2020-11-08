import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { History } from '../History';
import { AddNewActivity } from '../AddNewActivity';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Container>
                <Row>
                    <Col><h1>Activity Tracker</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="history" id="main-tabs">
                            <Tab eventKey="history" title="History">
                                <History />
                            </Tab>
                            <Tab eventKey="addNew" title="Add New Activity">
                                <AddNewActivity />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </Provider>
    );
};

export default App;