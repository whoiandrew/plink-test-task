import React from "react";
import { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const defaultFormState = {
  fullName: "",
  email: "",
  country: "",
  city: "",
  address: "",
};

const OrderForm = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [validationError, setValidationError] = useState({
    error: true,
    message: "",
  });
  const handleInput = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const isInputValid = () => {
    const emptyFields = Object.entries(formState).filter((field) => {
      return !field[1] || /^\s*$/.test(field[1]);
    });
    return !Boolean(emptyFields.length);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_CREDS", creds: formState });
    if (isInputValid()) {
      setValidationError({ error: false, message: "" });
      history.push("/goods/order/summary");
    } else {
      setValidationError({
        error: true,
        message: "Please, fill all the fields",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col sm={10} md={8} xl={6}>
            <h3>Provide your credentials</h3>
            <Form onSubmit={submitFormHandler}>
              <Form.Group>
                <Form.Label htmlFor="fullName">FullName: </Form.Label>
                <Form.Control
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">Email: </Form.Label>
                <Form.Control
                  name="email"
                  pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  type="email"
                  value={formState.email}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="country">Country: </Form.Label>
                <Form.Control
                  name="country"
                  value={formState.country}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="city">City: </Form.Label>
                <Form.Control
                  name="city"
                  value={formState.city}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="address">Address: </Form.Label>
                <Form.Control
                  name="address"
                  value={formState.address}
                  onChange={handleInput}
                />
              </Form.Group>
              <div>
                <p
                  style={{
                    color: "red",
                    visibility:
                      validationError.error && validationError.message
                        ? "visible"
                        : "hidden",
                  }}
                >
                  Error: {validationError.message}
                </p>
              </div>
              <Button type="submit">Confirm order</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default OrderForm;
