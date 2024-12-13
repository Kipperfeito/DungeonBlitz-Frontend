import api from "@/services/api";
import { useEffect, useState } from "react";
import styles from "@/styles/Lista.module.css";
import CardPersonagem from "@/components/CardPersonagem";

export default function ListagemPersonagem() {
  const [personagem, setPersonagem] = useState([]);

  const getPersonagem = () => {
    api
      .get("/personagens/")
      .then(async (result) => {
        var listaPersonagens = result.data;
      
        for (let per of listaPersonagens) {
          if (per.perimagem)
          await api
          .get(`/personagens/upload/${per.perimagem}`, {
            responseType: "blob",
          }).then((res) => {
            const { data } = res;
            per.preview = URL.createObjectURL(data);
            });
          }
          console.log(listaPersonagens)
        setPersonagem(listaPersonagens);
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
  )
}
