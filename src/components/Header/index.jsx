import { useState } from "react";
import { toast } from "react-toastify";
import logo from "../../icons/logo.svg";
import styles from "./style.module.css";
function Header({ products, setFilteredProducts }) {
  const [search, setSearch] = useState("");
  function filter() {
    const filtered = products.filter((elem) =>
      elem.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ? true
        : elem.category
            .toLocaleLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              search
                .toLocaleLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )
        ? true
        : false
    );

    filtered.length === 0 ? (
      (toast.error("Ítem não exite"))
      (setFilteredProducts([]))
      ): setFilteredProducts(filtered);
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="" className={styles.img} />

      <form
        className={styles.form}
        onSubmit={(e) => filter(e.preventDefault())}
      >
        <input
          type="text"
          name="pesquisa"
          placeholder="O que você procura?"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit" onSubmit={filter}>
          Pesquisar
        </button>
      </form>
    </header>
  );
}
export default Header;
