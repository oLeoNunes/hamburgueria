import "./App.css";
import "./reset.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"


function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);


  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);
  return (
    <div className="App">
      <Header products={products} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
      <section className="section">
      <ProductList products={products} setCurrentSale={setCurrentSale} currentSale={currentSale} filteredProducts={filteredProducts}/>
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </section>
      <ToastContainer/>
    </div>
  );
}

export default App;
