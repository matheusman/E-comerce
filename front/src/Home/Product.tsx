import React from "react";
import pod from "../assets/pod.jpg";
import styles from "./styles/_Product.module.scss";
import useForm from "../Hooks/useForm";
import Input from "../components/Input";

function Product() {
  const [next, setNext] = React.useState<boolean>(false);
  const [prev, setPrev] = React.useState<boolean>(false);
  const [table, setTable] = React.useState<boolean>(false);
  const [cont, setCont] = React.useState<number>(1);
  const [valueProduct, setValueProduct] = React.useState<number>(80.5);
  const [cartao, setCartao] = React.useState<number>(valueProduct);
  const e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const cep = useForm("cep");
  return (
    <div>
      <div className={`${styles.table} ${table ? styles.activeTable : ""}`}>
        <h2 onClick={() => setTable(!table)}>X</h2>
        <ul>
          {e.map((index) => {
            return (
              <div>
                <li key={index}>
                  Dividido em {index}X{" "}
                  {((valueProduct * cont) / index)
                    .toFixed(2)
                    .toString()
                    .replace(/[.]/, ",")}
                </li>
                <p>Total: {valueProduct * cont}</p>
              </div>
            );
          })}
        </ul>
      </div>
      <div className={`${styles.showProduct} animeTop`}>
        <div className={styles.product}>
          <div className={`${styles["pod"]}`}></div>
          <div className={styles.productClientBuy}>
            <h2>
              Pod eihsaiosd hioasd ashduiah aknsadasuhduashd asiodhsaohdiousa
              sdasdiohadiod
            </h2>
            <div>
              <p>
                R${" "}
                {(cont * valueProduct)
                  .toFixed(2)
                  .toString()
                  .replace(/[.]/, ",")}
              </p>
              <p>
                12X no cartão{" "}
                {((cartao * cont) / 12)
                  .toFixed(2)
                  .toString()
                  .replace(/[.]/, ",")}
              </p>
              <button onClick={() => setTable(!table)}>Ver parcelado</button>
            </div>
            <div>
              <button>Escolha o sabor</button>
              <button>Adicionar ao carrinho</button>
              <div className={styles.quantidade}>
                <button
                  className={styles.menos}
                  onClick={() =>
                    setCont(() => {
                      if (cont <= 1) {
                        return 1;
                      } else {
                        return cont - 1;
                      }
                    })
                  }
                >
                  -
                </button>
                <div className={styles.number}>{cont}</div>
                <button
                  onClick={() => setCont(cont + 1)}
                  className={styles.mais}
                >
                  +
                </button>
              </div>
              <button>Comprar agora</button>
            </div>
            <div>
              <Input type="text" name="cep" label="CEP" {...cep} />
              <button>Calcular Valor</button>
            </div>
          </div>
          <div className={styles.descricao}>
            <p>Descrição</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              praesentium incidunt est, natus architecto reiciendis nesciunt
              animi, beatae dolores porro officia voluptates. Officiis earum
              laborum, commodi eos repellendus corrupti ut!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p>5000 MHA</p>
            <p>Ignite</p>
          </div>
        </div>
        <footer className={styles.carrocel}>
          <button
            className={`${styles.next}`}
            onPointerDown={() => setNext(true)}
          >
            {">"}
          </button>
          <button className={styles.prev}>{"<"}</button>
          <div className={`${styles.showCarrocel} ${next && "active"}`}>
            <div className={styles.productCarrocel}>
              <img src={pod} />
              <p>Pod aniosdoiasndiosno</p>
              <p>R$ 100,00</p>
            </div>
            <div className={styles.productCarrocel}>
              <img src={pod} />
              <p>Pod aniosdoiasndiosno</p>
              <p>R$ 100,00</p>
            </div>
            <div className={styles.productCarrocel}>
              <img src={pod} />
              <p>Pod aniosdoiasndiosno</p>
              <p>R$ 100,00</p>
            </div>
            <div className={styles.productCarrocel}>
              <img src={pod} />
              <p>Pod aniosdoiasndiosno</p>
              <p>R$ 100,00</p>
            </div>
            <div className={styles.productCarrocel}>
              <img src={pod} />
              <p>Pod aniosdoiasndiosno</p>
              <p>R$ 100,00</p>
            </div>
            <div className={styles.productCarrocel}>
              <img src={pod} />
              <p>Pod aniosdoiasndiosno</p>
              <p>R$ 100,00</p>
            </div>
            <div className={styles.productCarrocel}>
              <img src={pod} />
              <p>Pod aniosdoiasndiosno</p>
              <p>R$ 100,00</p>
            </div>
            <div className={styles.productCarrocel}>
              <img src={pod} />
              <p>Pod aniosdoiasndiosno</p>
              <p>R$ 100,00</p>
            </div>
            <div className={styles.productCarrocel}>
              <img src={pod} />
              <p>Pod aniosdoiasndiosno</p>
              <p>R$ 100,00</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Product;
