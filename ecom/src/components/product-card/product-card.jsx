import React from "react";
import Button from "../button/button";

import "./procuct-card.scss";

const ProductCard = () => {
  return (
    <div className="product-card-container">
      <img />
      <div className="footer">
        <div className="name"></div>
        <div className="price"></div>
        <Button className="inverted" />
      </div>
    </div>
  );
};

export default ProductCard;
