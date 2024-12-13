import styles from "./styles.module.css";
import { useRouter } from "next/router";
import api from "@/services/api";

export default function CardAtributos({ atributos }) {
  const router = useRouter();

  const excluirAtributos = (id) => {
    api
      .delete(`/atributos/${id}`)
      .then((res) => {
        alert("Atributos excluídos com sucesso");
        router.reload();
      })
      .catch((err) => alert("Erro ao excluir"));
  };

  const editarAtributos = (id) => {
    router.push("/editar-atr/" + id);
  };

  return (
    <div className={styles.container}>
      <p>{atributos.nome}</p>
      <span>Força: {atributos.atrforca}</span>
      <span>Agilidade: {atributos.atragilidade}</span>
      <span>Inteligência: {atributos.atrinteligencia}</span>
      <span>Resistência: {atributos.atrresistencia}</span>
      <span>Sorte: {atributos.atrsorte}</span>
      <span>Destreza: {atributos.atrdestreza}</span>
      <button
        type="button"
        className={styles.btnEditar}
        onClick={() => editarAtributos(atributos.id)}
      >
        Editar
      </button>
      <button
        type="button"
        className={styles.btnExcluir}
        onClick={() => excluirAtributos(atributos.id)}
      >
        Excluir
      </button>
    </div>
  );
}
