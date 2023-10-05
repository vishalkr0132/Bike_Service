// Importing necessary modules and components
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import { updateProfile } from "firebase/auth";
import Loading from "../Shared/Loading/Loading";
import PageTitle from "../Shared/PageTitle/PageTitle";
import './Signup.css'; // Importing local styles
import useToken from "../hooks/useToken";

// Signup component
const Signup = () => {
  // State for handling checkbox agreement
  const [agree, setAgree] = useState(false);

  // Firebase authentication hooks
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  // Navigation hook
  const navigate = useNavigate();

  // Custom hook for managing authentication token
  const [token] = useToken(user);

  // State for form validation
  const [validated, setValidated] = useState(false);

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;

    // Creating a user with email and password
    await createUserWithEmailAndPassword(email, password);

    // Updating user profile with display name
    await updateProfile({ displayName: name });
    console.log("Updated profile");

    // Navigating to the login page
    navigate("/login");

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  // Navigation function for login page
  const navigateLogin = (event) => {
    navigate("/login");
  };

  // Handling loading states
  if (loading || updating) {
    return <Loading></Loading>;
  }

  // If the user is already authenticated, redirect to the login page
  if (token) {
    navigate('/login');
  }

  // Rendering the signup form
  return (
    <div>
      <PageTitle title="Signup"></PageTitle>
      <h2 className="signup-h1">Sign up</h2>
      <div className="container py-5 w-50">

        {/* Signup Form */}
        <Form
          className=""
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              onClick={() => setAgree(!agree)}
              type="checkbox"
              label="Accept terms and condition"
            />
          </Form.Group>

          {/* Signup Button */}
          <Button className="btn btn-primary" type="submit" disabled={!agree}>
            Signup
          </Button>
        </Form>

        {/* Login link */}
        <p className="text-center">
          Already have an account ?{" "}
          <span
            style={{ cursor: "pointer" }}
            className="text-decoration-underline text-danger"
            onClick={navigateLogin}
          >
            Please Login
          </span>
        </p>

        {/* Social Login component */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

// Exporting the Signup component
export default Signup;
