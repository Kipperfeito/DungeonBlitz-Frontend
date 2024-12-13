import api from "@/services/api";
import { useEffect, useState } from "react";
import styles from "@/styles/Lista.module.css";
import CardPersonagem from "@/components/CardPersonagem";

export default function ListagemPersonagem() {
  const [personagem, setPersonagem] = useState([]);

  const getPersonagem = () => {
    api
      .get("/personagem/")
      .then((result) => {
        setPersonagem(result.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPersonagem();
  }, []);

  return (
    <>
      <h3 className={styles.titulo}>Listagem de Personagens</h3>
      <div className={styles.container}>
        {personagem?.length > 0 && personagem.map((personagem) => (
          <CardPersonagem key={personagem.id} personagem={personagem} />
        ))}
      </div>
    </>
  );
}
