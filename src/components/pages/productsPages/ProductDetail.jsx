import React from "react";
import { useParams } from "react-router";
import WhatsAppButton from "../../layout/button/WhatsappButton";
import ProductsData from "../../products/ProductsData";
import "./productDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductsData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="productDetailled">
      <div className="product_img">
        <img src="../../../images/1.jpg" alt="" />
      </div>
      <div className="product_details">
        <h2>{product.name}</h2>
        <p>
          <span>Description:</span>
          {product.description}
        </p>
        <p>
          <span>Price:</span> {product.price}$
        </p>
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default ProductDetail;
