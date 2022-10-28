import styles from "./style.module.css";
function ProductCart({ product, setCurrentSale, currentSale}) {
  function removeCart(){
    const arr = currentSale.filter(elem => elem.id !== product.id)
    setCurrentSale(arr)
  }
  return (
    <div className={styles.productContainer}>
      <img src={product.img} alt="" />
      <div>
        <p>{product.name}</p>
        <span>{product.category}</span>
      </div>
      <button onClick={removeCart}>Remover</button>
    </div>
  );
}
export default ProductCart;
