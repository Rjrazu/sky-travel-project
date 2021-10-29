import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const { id } = useParams();
    const [pack, setPack] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/packages/${id}`)
            .then(res => res.json())
            .then(data => setPack(data))
    }, [id])

    return (
        <div className="container mt-5 mb-5 p-3 shadow">
            <Container>
                <Row>
                    <Col lg={8}>
                        <img src={pack.image} className="img-fluid rounded-3" alt="" /> <br />
                        <h5>{pack.time}</h5>
                        <h2>{pack.name}</h2>
                        <h4>Total Cost : BDT {pack.cost} </h4>
                        <h6>{pack.description}</h6>
                    </Col>
                    <Col className="text-center" lg={4}>
                        <h3>Booking</h3>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Booking;