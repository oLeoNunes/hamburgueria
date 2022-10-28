import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import ProductCart from "../PruductCart";
import styles from "./style.module.css";
function Cart({ currentSale, setCurrentSale }) {
  function removeAll(){
    setCurrentSale([])
    toast.success("itens removidos com sucesso")
  }
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(()=>{
    const value = currentSale.reduce((prev, elem) =>{
      return prev + elem.price
    }, 0)
    setCartTotal(value.toFixed(2))
  })

  return (
    <div className={styles.cart}>
      <header className={styles.header}>
        <p>Carrinho de Compras</p>
      </header>
      {currentSale.length > 0 ? (
        <div className={styles.containerCart}>
          {currentSale.map((product) => (
            <ProductCart
              product={product}
              key={product.id}
              setCurrentSale={setCurrentSale}
              currentSale={currentSale}
            />
          ))}
          <div className={styles.cartTotal}>
            <section>
              <h1>Total</h1>
              <p>{`R$ ${cartTotal}`}</p>
            </section>
            <button onClick={removeAll}>Remover todos </button>
          </div>
        </div>
      ) : (
        <div className={styles.containerCartVazio}>
          <h1>Sua sacola está vazia</h1>
          <span>Adicione itens</span>
        </div>
      )}
    </div>
  );
}
export default Cart;
