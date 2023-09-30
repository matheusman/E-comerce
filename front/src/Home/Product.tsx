import React from "react";
import pod from "../assets/pod.jpg";
import styles from "./styles/_Product.module.scss";
import useForm from "../Hooks/useForm";
import Input from "../components/Input";

function Product() {
  const [next, setNext] = React.useState<boolean>(false);
  const [prev, setPrev] = React.useState<boolean>(false);
  const [table, setTable] = React.useState<boolean>(true);
  const [cont, setCont] = React.useState<number>(1);
  const [valueProduct, setValueProduct] = React.useState<number>(80.5);
  const [cartao, setCartao] = React.useState<number>(valueProduct);
  const [select, setSelect] = React.useState<string>("");
  const [countClick, setCountClick] = React.useState<number>(0);
  const e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const cep = useForm("cep");
  return (
    <div>
      <div className={`${styles.bodyAll} ${table ? styles.activeTable : ""}`}>
        <div className={`${styles.table} `}>
          <h2 onClick={() => setTable(!table)}>x</h2>
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
                  <p>
                    Preço total:{" "}
                    {(valueProduct * cont)
                      .toFixed(2)
                      .toString()
                      .replace(".", ",")}
                  </p>
                </div>
              );
            })}
          </ul>
        </div>
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
              <p className={styles.preco}>
                R${" "}
                {(cont * valueProduct)
                  .toFixed(2)
                  .toString()
                  .replace(/[.]/, ",")}
              </p>
              <p className={styles.cartao}>
                12X no cartão{" "}
                {((cartao * cont) / 12)
                  .toFixed(2)
                  .toString()
                  .replace(/[.]/, ",")}
              </p>
              <button
                className={styles.parcela}
                onClick={() => setTable(!table)}
              >
                Ver parcelado
              </button>
            </div>
            <div>
              <select
                value={select}
                onChange={({ target }) => setSelect(target.value)}
                className={styles.select}
              >
                <option>Sabor Uva</option>
                <option>Sabor StawBerry</option>
                <option>Sabor Maracuja</option>
                <option>Sabor Berry</option>
                <option>Sabor Fruit</option>
                <option>Sabor Menta</option>
              </select>
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
              <div className={styles.buttonProduct}>
                <button>Adicionar ao carrinho</button>
                <button>Comprar agora</button>
              </div>
            </div>
            <div>
              <p>Calcular valor da entrega:</p>
              <Input type="text" name="cep" label="CEP" {...cep} />
              <button className={styles.buttonCep}>Calcular Valor</button>
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
            onPointerDown={() => setCountClick(cont + 1)}
          >
            {">"}
          </button>
          <button className={styles.prev}>{"<"}</button>
          <div
            className={`${styles.showCarrocel}`}
            style={{ transform: `translateX(-${countClick * 100}px)` }}
          >
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
