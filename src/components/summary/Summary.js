import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Table, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Summary = () => {
  const { name, price, ram, sku, hdd } = useSelector(
    (store) => store.currentGoods,
  );

  const { fullName, email, country, city, address } = useSelector(
    (store) => store.currentCreds,
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Row>
          <h3>Summary</h3>
        </Row>
        <Row className="justify-content-center">
          <Col sm={10} md={8} xl={6}>
            <Card>
              <Card.Header>Product Info</Card.Header>
              <Card.Text style={{ padding: "40px" }}>
                <div>
                  <p>Product: {name}</p>
                  <p>Price: {price}</p>
                  <p>RAM: {ram}</p>
                  <p>HDD: {hdd}</p>
                  <p>SKU: {sku}</p>
                </div>
              </Card.Text>
            </Card>
          </Col>
          <Col sm={10} md={8} xl={6}>
            <Card>
              <Card.Header>Personal Data</Card.Header>
              <Card.Text style={{ padding: "40px" }}>
                <div>
                  <p>Full Name: {fullName}</p>
                  <p>Email: {email}</p>
                  <p>Country: {country}</p>
                  <p>City: {city}</p>
                  <p>Address: {address}</p>
                </div>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Summary;
