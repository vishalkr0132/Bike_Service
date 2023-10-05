// Importing necessary modules and components
import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init"; // Importing Firebase authentication instance
import logo from "../../../images/logo.png"; // Assuming you have a logo image
import "./Header.css"; // Importing local styles

// Header component
const Header = () => {
  // Getting user and authentication state
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // Function to handle user signout
  const handleSignout = () => {
    signOut(auth);
  };

  // Function to navigate to the contact page
  const handleNavigateContact = () => {
    navigate(`/contact`);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="primary"
        variant="dark"
        className="p-4 shadow"
      >
        <Container>
          {/* Navbar Brand */}
          <Navbar.Brand as={Link} to="/">
            {/* Logo (assuming you have a logo image) */}
            {/* <img height={30} src={logo} alt="" /> */}
            <span>Bike Service</span>
          </Navbar.Brand>

          {/* Navbar Toggle Button */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* Navbar Collapse */}
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Navbar Links */}
            <Nav className="me-auto ">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="service">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="experts">
                Experts
              </Nav.Link>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="contact" onClick={handleNavigateContact}>
                Contact
              </Nav.Link>
              {/* <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link> */}
            </Nav>

            {/* Right-side Navbar Links */}
            <Nav>
              {/* Conditional rendering for authenticated user */}
              {user && (
                <>
                  <Nav.Link as={Link} to="addservice">
                    Add Service
                  </Nav.Link>
                  <Nav.Link as={Link} to="manageservice">
                    Manage Services
                  </Nav.Link>
                  <Nav.Link as={Link} to="orders">
                    Orders
                  </Nav.Link>
                </>
              )}

              {/* Conditional rendering for user authentication */}
              {user ? (
                <>
                  {/* Sign Out Button */}
                  <Button
                    onClick={handleSignout}
                    className="btn btn-danger rounded-pill"
                  >
                    Sign out
                  </Button>
                </>
              ) : (
                // Render login link for non-authenticated user
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

// Exporting the Header component
export default Header;
