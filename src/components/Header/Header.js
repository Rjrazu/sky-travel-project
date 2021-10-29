import React from 'react';
import { useHistory } from 'react-router';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();
    const history = useHistory();

    const handleLoginButton = () => {
        history.push('/login')
    }

    const logo = 'https://i.ibb.co/XZbgJ8f/Group-1329.png';
    const logoStyle = {
        width: '190px',
    }
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img style={logoStyle} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-3 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink
                                to="/home"
                                style={{
                                    fontWeight: '500',
                                    fontSize: '20px',
                                    textDecoration: 'none',
                                    marginRight: '20px'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/packages"
                                style={{
                                    fontWeight: '500',
                                    fontSize: '20px',
                                    textDecoration: 'none',
                                    marginRight: '20px'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Packages
                            </NavLink>
                            <NavLink
                                to="/addservice"
                                style={{
                                    fontWeight: '500',
                                    fontSize: '20px',
                                    textDecoration: 'none',
                                    marginRight: '20px'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Add Service
                            </NavLink>
                            <NavLink
                                to="/blog"
                                style={{
                                    fontWeight: '500',
                                    fontSize: '20px',
                                    textDecoration: 'none',
                                    marginRight: '20px'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Blogs
                            </NavLink>
                        </Nav>
                        {user?.email
                            ?
                            <div>
                                <h5 className=" d-inline text-white me-2">{user?.displayName}</h5>
                                <Button onClick={logOut} variant="success">Logout</Button>
                            </div>
                            :
                            <Button onClick={handleLoginButton} variant="success">Login</Button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;