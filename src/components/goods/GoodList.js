import Good from "./Good";
import { useSelector } from "react-redux";
import { Container, Row, Table, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import MemoizedSelector from "./Selector";
import React from "react";

const GoodList = () => {
  const goods = useSelector((store) => store.goods);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col sm={10} md={8} xl={6}>
            <Table responsive>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>RAM</th>
                  <th>Price</th>
                  <th>HDD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.keys(goods[0]).map((key) => {
                    return <MemoizedSelector key={key} sortParam={key} />;
                  })}
                </tr>
                {goods.map((good, index) => {
                  return <Good key={index} {...good} />;
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default GoodList;
