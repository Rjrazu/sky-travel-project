import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const AllAddedPack = () => {
    const [packs, setPacks] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-coast-33302.herokuapp.com/pack')
            .then(res => res.json())
            .then(data => setPacks(data))
    }, [])
    const handleRemove = (id) => {
        const procced = window.confirm('Are You Sure To Remove The Package?');
        if (procced) {
            fetch(`https://fathomless-coast-33302.herokuapp.com/pack/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainPack = packs.filter(pack => pack._id !== id);
                        setPacks(remainPack)
                    } else {
                        alert('Something Went Wrong')
                    }
                });
        }
    }
    const handleApproved = (id) => {
        const procced = window.confirm('Are You Sure To Approved The Package?');
        if (procced) {
            fetch(`https://fathomless-coast-33302.herokuapp.com/pack/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Approved Successfully')
                        const remainPack = packs.filter(pack => pack._id !== id);
                        setPacks(remainPack)
                    } else {
                        alert('Something Went Wrong')
                    }
                });
        }
    }

    return (
        <div>
            {
                packs.map(pack => <div key={pack.key}>
                    <Col>
                        <Card className="mb-3">
                            <Card.Img variant="top" className=" img-fluid" src={pack.image} />
                            <Card.Body>
                                <Card.Title>{pack.name}</Card.Title>
                                <p>Cost : BDT {pack.cost}</p>
                            </Card.Body>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-danger me-3" onClick={() => handleRemove(pack._id)} > Delete Request</button>
                                <button className="btn btn-success" onClick={() => handleApproved(pack._id)} > Approve Now</button>
                            </div>
                        </Card>
                    </Col>

                </div>)
            }
        </div>
    );
};

export default AllAddedPack;