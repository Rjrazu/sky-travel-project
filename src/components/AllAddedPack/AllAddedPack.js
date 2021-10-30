import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const AllAddedPack = () => {
    const [packs, setPacks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/pack')
            .then(res => res.json())
            .then(data => setPacks(data))
    }, [])


    return (
        <div>
            {
                packs.map(pack => <div key={pack.key}>
                    <Col>
                        <Card className="mb-3">
                            <Card.Img variant="top" className=" img-fluid" src={pack.image} />
                            <Card.Body>
                                <Card.Title>{pack.name}</Card.Title>
                                <p>Add Package</p>
                            </Card.Body>
                            <button className="btn btn-danger" > Booking Now</button>
                        </Card>
                    </Col>

                </div>)
            }
        </div>
    );
};

export default AllAddedPack;