import React, { useEffect, useState } from "react";
import Banner from "../../layout/banner/Banner";
import Product from "../../product/Product";
//import ProductsData from "../../products/ProductsData";
import "./homePage.css";

function HomePage() {
  const [ProductsData, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchData();

    console.log(ProductsData);
  }, []);
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
}

export default HomePage;
