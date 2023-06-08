import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { } from "react-router-dom";
import { logout } from "../../actions/userActions";

const Header = ({ setSearch }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    };


    return (
        <Navbar bg="primary" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand >
                    <Link to="/" className='abc'>
                        NotesWriter
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='m-auto'>
                        <Form inline="true">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Form>
                    </Nav>
                    {userInfo ? (<Nav>
                        <Nav.Link as={Link} to="/mynotes">
                            {/* <Link to="/mynotes" className='abc'> */}
                            My Notes
                            {/* </Link> */}
                        </Nav.Link>
                        <NavDropdown title={`${userInfo?.name}`} id="basic-nav-dropdown" className='abc'>
                            <NavDropdown.Item href='/profile'>
                                    My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>)
                        :
                        (<Nav>
                            {" "}
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        </Nav>)
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;