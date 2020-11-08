import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { History } from '../History';

const App: React.FC = () => {
    return (
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
                            Add New Tab
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};

export default App;