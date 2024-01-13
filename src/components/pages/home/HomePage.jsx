import React from "react";
import Banner from "../../layout/banner/Banner";
import Product from "../../product/Product";
import ProductsData from "../../products/ProductsData";
import "./homePage.css";

const HomePage = () => {
  return (
    <main className="home">
      <Banner />
      <section className="products-section">
        <div className="Products_container container">
          {ProductsData.map((product) => {
            {
              return <Product {...product} />;
            }
          })}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
