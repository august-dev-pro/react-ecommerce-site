import React from "react";
import WhatsAppButton from "../layout/button/WhatsappButton";
import "./product.css";

const Product = ({ id, title, category, description, price, image }) => {
  return (
    <div className="product">
      <div className="product_img">
        <a href={`product/${id}`}>
          <img src={image} alt="" />
        </a>
      </div>
      <div className="product_des">
        <div className="product_name"> {title} </div>
        <div className="product_price"> {price} $</div>
        <div>
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
};

export default Product;
