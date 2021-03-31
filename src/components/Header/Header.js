import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Navbar className="d-flex justify-content-between menu-bar" bg="primary" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/home"><strong>e-shop</strong></Navbar.Brand>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto align-items-end">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                            <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
                            {loggedInUser.isSignedIn ? <Nav.Link ><strong>{loggedInUser.name}</strong></Nav.Link> :
                                <Button as={Link} to="/login" variant="outline-light">Login</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;