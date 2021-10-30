import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Package = ({ pack }) => {
    const { _id, name, image } = pack;
    const history = useHistory();

    const handleCard = () => {
        history.push(`/booking/${_id}`)
    }
    const bg = [
        'bg-secondary',
        'bg-success',
        'bg-info',
        'bg-warning',
        'bg-primary'
    ];
    const randomBG = bg[Math.floor(Math.random() * 5)];

    return (
        <div className="pointer-cursor">
            <Col className="text-white">
                <Card className={`${randomBG}`}>
                    <Card.Img variant="top" className="" style={{ maxWidth: '480px', height: '250px' }} src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>Add Package</p>
                    </Card.Body>
                    <button className="btn btn-danger" onClick={handleCard}> Booking Now</button>
                </Card>
            </Col>
        </div>
    );
};

export default Package;