import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-coast-33302.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (

        <div className="container mt-5 mb-5">
            <h2 className="text-center mb-3">Total Services {packages.length}</h2>
            <Row xs={1} md={2} lg={4} className="g-4">

                {
                    packages.map(pack => <Package
                        key={pack.key}
                        pack={pack}
                    ></Package>)
                }
            </Row>
        </div>

    );
};

export default Packages;