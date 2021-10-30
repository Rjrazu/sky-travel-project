import React from 'react';
import { Col, Container, Nav, Row, Tab, } from 'react-bootstrap';
import AddPackage from '../AddPackage/AddPackage';
import AllAddedPack from '../AllAddedPack/AllAddedPack';

const Admin = () => {
    return (

        <div className="mt-5 mb-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Container>
                    <Row>
                        <Col lg={5} md={4} sm={4}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Add a New Package</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"> Manage All Packages</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col lg={7} md={8} sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <AddPackage></AddPackage>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <AllAddedPack></AllAddedPack>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>

                    </Row>
                </Container>
            </Tab.Container>
        </div>
    );
};

export default Admin;