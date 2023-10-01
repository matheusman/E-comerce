import React from "react";
import styles from "./styles/_LocationMap.module.scss";
import map from "../assets/map-red.png";
import { NavLink } from "react-router-dom";

function LocationMap() {
  const [check, setCheck] = React.useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <div className={`${styles.location} animeTop`}>
      <div className={styles.map}>
        <img src={map} />
        <h2>Localização</h2>
      </div>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <div className={styles.input}>
            <input
              type="radio"
              checked
              onChange={({ target }) => setCheck(target.value)}
              value={check}
              name="line"
              id="check"
            />
          </div>
          <div className={styles.info}>
            <div>
              <h5>Rua</h5> Rua joao freitas
            </div>
            <div>
              <h5>Numero</h5> 31
            </div>
            <div>
              <h5>Bairro</h5> Tocantins
            </div>
            <div>
              <h5>Cidade</h5> Uberlandia
            </div>
            <div>
              <h5>Complemento</h5> Nenhum
            </div>
            <div>
              <h5>Tipo</h5> Casa
            </div>
            <div>
              <h5>Cep</h5> 38415-330
            </div>
            <div>
              <h5>Estado</h5> MG
            </div>
          </div>
          <button className={styles.editar}>Editar</button>
        </label>
        <NavLink to="/endereco/input">
        <div className={styles.plusEndereco}>
            <button className={styles.plus}>+</button>
            <p>Adicionar Novo endereço</p>
        </div>
        </NavLink>
      </form>
    </div>
  );
}

export default LocationMap;
