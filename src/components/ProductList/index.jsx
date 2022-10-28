import Product from "../Product";
import styles from "./style.module.css";

function ProductList({
  products,
  setCurrentSale,
  currentSale,
  filteredProducts,
}) {
  return filteredProducts.length > 0 ? (
    <div className={styles.container}>
      {filteredProducts.length > 0
        ? filteredProducts.map((product) => (
            <Product
              setCurrentSale={setCurrentSale}
              currentSale={currentSale}
              product={product}
              key={product.id}
            />
          ))
        : ""}
    </div>
  ) : (
    <div className={styles.container}>
      {products.length > 0
        ? products.map((product) => (
            <Product
              setCurrentSale={setCurrentSale}
              currentSale={currentSale}
              product={product}
              key={product.id}
            />
          ))
        : ""}
    </div>
  );
}
export default ProductList;
