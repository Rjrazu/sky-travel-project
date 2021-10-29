import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Package = (props) => {
    const { _id, name, image } = props.pack;

    const history = useHistory();


    const handleCard = () => {
        history.push(`/booking/${_id}`)
    }


    const bg = [
        'bg-primary',
        'bg-secondary',
        'bg-success',
        'bg-info',
        'bg-warning',
        'bg-danger'
    ];
    const randomBG = bg[Math.floor(Math.random() * 6)];

    return (
        <div onClick={handleCard} className="pointer-cursor">
            <Col className="text-white">
                <Card className={`${randomBG}`}>
                    <Card.Img variant="top" className="" style={{ maxWidth: '480px', height: '250px' }} src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>Add Package</p>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Package;