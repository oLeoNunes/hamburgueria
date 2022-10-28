
import { toast } from "react-toastify";
import styles from "./style.module.css"

function Product({ product,setCurrentSale,currentSale}) {
    function updateCurrentSale(){
      const newCurrentSale = [...currentSale,product]
      currentSale.includes(product) === false ? (        
        setCurrentSale(newCurrentSale)
      ):(
        toast.error("Ítem já adicionado")
      )
    }
  return (
    <div className={styles.containerProduct}>
      <div className={styles.header}>
      <img src={product.img} alt="" />
      </div>
      <div className={styles.content}>

      <p className={styles.title}>{product.name}</p>
      <span className={styles.category}>{product.category}</span>
      <p className={styles.price}>{`R$ ${product.price}`}</p>

      <button className={styles.buttonAdd} onClick={updateCurrentSale}>Adicionar</button>
      </div>
    </div>
  );
}
export default Product;
