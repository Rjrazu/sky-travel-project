import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import AddedPack from '../AddedPack/AddedPack';

const Dashboard = () => {
    const { user } = useAuth()
    const { uid } = user;

    const [packs, setPacks] = useState([]);

    useEffect(() => {
        fetch(`https://fathomless-coast-33302.herokuapp.com/package/${uid} `)
            .then(res => res.json())
            .then(data => setPacks(data))
    }, [uid])


    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center mb-3">Total Added Services {packs.length}</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    packs.map(pack => <AddedPack
                        key={pack.key}
                        pack={pack}
                    ></AddedPack>)
                }
            </Row>
        </div>
    );
};

export default Dashboard;