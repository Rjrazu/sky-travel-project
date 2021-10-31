import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth()
    const { uid } = user;
    const { id } = useParams();
    const [pack, setPack] = useState({})

    const newPack = { ...pack, uid }

    useEffect(() => {
        fetch(`https://fathomless-coast-33302.herokuapp.com/packages/${id}`)
            .then(res => res.json())
            .then(data => setPack(data))
    }, [id]);


    const handleOrder = (packages) => {
        axios.post('https://fathomless-coast-33302.herokuapp.com/pack/add', packages)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                }
            })
    }

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
                        <div className="add-service">
                            <button onClick={() => handleOrder(newPack)}>Order</button>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Booking;