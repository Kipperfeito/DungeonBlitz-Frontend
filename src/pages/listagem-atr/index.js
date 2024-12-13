import api from "@/services/api";
import { useEffect, useState } from "react";
import styles from "@/styles/ListaAtributos.module.css";
import CardAtributos from "@/components/CardAtributos";

export default function ListagemAtributos() {
  const [atributos, setAtributos] = useState([]);

  const getAtributos = () => {
    api
      .get("/atributos/")
      .then((result) => {
        setAtributos(result.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAtributos();
  }, []);

  return (
    <>
      <h3 className={styles.titulo}>Listagem de Atributos</h3>
      <div className={styles.container}>
        {atributos?.length > 0 &&
          atributos.map((atributo) => (
            <CardAtributos key={atributo.id} atributos={atributo} />
          ))}
      </div>
    </>
  );
}
