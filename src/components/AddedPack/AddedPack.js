import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AddedPack = (props) => {
    const { _id, name, image, cost } = props.pack;

    // Delete Pack
    const handleDelete = (id) => {
        const procced = window.confirm('Are You Sure To Remove The Package?');
        if (procced) {
            fetch(`https://fathomless-coast-33302.herokuapp.com/pack/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                    } else {
                        alert('Something Went Wrong')
                    }
                });
        }
    }

    const bg = [
        'bg-secondary',
        'bg-success',
        'bg-info',
        'bg-primary'
    ];
    const randomBG = bg[Math.floor(Math.random() * 4)];
    return (
        <div className="pointer-cursor">
            <Col className="text-white">
                <Card className={`${randomBG}`}>
                    <Card.Img variant="top" className="" style={{ maxWidth: '480px', height: '250px' }} src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>Cost : BDT {cost}</p>
                    </Card.Body>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-danger me-3" disabled > Pending</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(_id)}> Cancel</button>
                    </div>

                </Card>
            </Col>
        </div>
    );
};

export default AddedPack;