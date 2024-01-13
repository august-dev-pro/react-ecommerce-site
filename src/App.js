import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import HomePage from "./components/pages/home/HomePage";
import ProductDetail from "./components/pages/productsPages/ProductDetail";
import "./App.css";
import ContactPage from "./components/pages/user/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
