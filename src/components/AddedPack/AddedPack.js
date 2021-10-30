import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const AddedPack = (props) => {
    const { _id, name, image } = props.pack;

    const [s_packs, setPack] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/pack')
            .then(res => res.json())
            .then(data => setPack(data));
    }, []);

    const handleDelete = (id) => {
        const procced = window.confirm('Are You Sure To Remove The Package?');
        if (procced) {
            fetch(`http://localhost:5000/pack/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingPack = s_packs.filter(s_pack => s_pack._id !== id);
                        setPack(remainingPack);
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
                        <p>Remove Package {s_packs.length}</p>
                    </Card.Body>
                    <button className="btn btn-danger" onClick={() => handleDelete(_id)}> Remove Now</button>
                </Card>
            </Col>
        </div>
    );
};

export default AddedPack;