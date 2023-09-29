import React from "react";
import pod from "../assets/pod.jpg";
import styles from "./styles/_Product.module.scss";
import useForm from "../Hooks/useForm";
import Input from "../components/Input";

function Product() {
  const cep = useForm("cep");
  return (
    <div className={styles.showProduct}>
      <div className={styles.product}>
        <div className={`${styles["pod"]}`}></div>
        <div>
          <div>Pod eihsaiosd hioasd ashduiah aknsd</div>
          <div>
            <p>R$ 59.90</p>
            <p>2X no cartão 39,90</p>
            <button>Ver parcelado</button>
          </div>
          <div>
            <button>Escolha o sabor</button>
            <button>Adicionar ao carrinho</button>
            <div className={styles.quantidade}>
              <div className={styles.menos}>-</div>
              <div className={styles.number}>1</div>
              <div className={styles.mais}>+</div>
            </div>
            <button>Comprar agora</button>
          </div>
          <div>
            <Input type="text" name="cep" label="CEP" {...cep} />
            <button></button>
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
      </footer>
    </div>
  );
}

export default Product;
