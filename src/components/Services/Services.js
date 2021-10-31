import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Services = () => {

    return (
        <div className="mb-5 mt-5">
            <Container>
                <div className="text-center">
                    <h4 className="text-danger">Our Communications</h4>
                    <h2>Available Transportation Services</h2>
                </div>
                <Row xs={2} sm={2} md={4} className="g-4">
                    <Col>





                        <Card className="p-3 shadow">

                            <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src="https://i.ibb.co/6BDcw8z/yxcqjf6wxjxyoe5vby3e.jpg" /></p>
                            <Card.Body>
                                <Card.Title>Private Car</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 shadow">

                            <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src="https://i.ibb.co/D7QCfWs/ac-deluxe-bus-500x500.jpg" /></p>
                            <Card.Body>
                                <Card.Title>A.C Bus</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 shadow">

                            <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src="https://i.ibb.co/DRpSY0X/hqdefault.jpg" /></p>
                            <Card.Body>
                                <Card.Title>Non A.C Bus</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 shadow">

                            <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src="https://i.ibb.co/4ZkyfN7/helicopterrrrr-1024x1024.jpg" /></p>
                            <Card.Body>
                                <Card.Title>Private Helicopter</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};


export default Services;