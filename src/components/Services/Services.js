import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Services = () => {

    return (
        <div className="mb-5 mt-5">
            <Container>
                <div className="text-center">
                    <h4 className="text-danger">Our Team</h4>
                    <h2>OUR EXPERTS</h2>
                </div>
                <Row xs={2} sm={2} md={4} className="g-4">
                    <Col>
                        <Card className="p-3 shadow">

                            <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src="https://www.nicepng.com/png/detail/26-260551_femscare-benifits-doctor-image-png-hd.png" /></p>
                            <Card.Body>
                                <Card.Title>Fatema Mohan</Card.Title>
                                <p>Medicine Experts</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 shadow">

                            <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src="https://www.pngitem.com/pimgs/m/194-1943511_doctors-hd-images-of-doctor-s-hd-png.png" /></p>
                            <Card.Body>
                                <Card.Title>Firoz Ahmed</Card.Title>
                                <p>Surgery Experts</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 shadow">

                            <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src="https://www.pngitem.com/pimgs/m/9-93881_doctors-hd-png-transparent-png.png" /></p>
                            <Card.Body>
                                <Card.Title>Shima Khan</Card.Title>
                                <p>Experts</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 shadow">

                            <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src="https://pngimg.com/uploads/doctor/doctor_PNG15988.png" /></p>
                            <Card.Body>
                                <Card.Title>Nazrul Islam</Card.Title>
                                <p>Experts</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};


export default Services;