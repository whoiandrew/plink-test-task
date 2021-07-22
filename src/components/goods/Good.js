import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import React from "react";

const Good = (goodInfo) => {
  const { name, price, ram, sku, hdd } = goodInfo;
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{name}</td>
      <td>{sku}</td>
      <td>{ram}</td>
      <td>{price}</td>
      <td>{hdd}</td>
      <td>
        <Link to="/goods/order">
          <Button onClick={() => dispatch({ type: "UPDATE_GOOD", goodInfo })}>
            Buy
          </Button>
        </Link>
      </td>
    </tr>
  );
};

export default Good;
