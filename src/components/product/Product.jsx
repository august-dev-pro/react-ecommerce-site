import React from "react";
import WhatsAppButton from "../layout/button/WhatsappButton";
import "./product.css";

const Product = ({ id, name, category, description, price, imageUrl }) => {
  return (
    <div className="product">
      <div className="product_img">
        <a href={`product/${id}`}>
          <img src={"../../../images/1.jpg"} alt="" />
        </a>
      </div>
      <div className="product_des">
        <div className="product_name"> {name} </div>
        <div className="product_price"> {price} $</div>
        <div>
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
};

export default Product;
