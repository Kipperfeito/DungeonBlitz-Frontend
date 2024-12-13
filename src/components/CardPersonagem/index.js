import styles from "./styles.module.css";
import { useRouter } from "next/router";
import api from "@/services/api";

export default function CardPersonagem({ personagem }) {
  const router = useRouter();

  const excluirPersonagem = (id) => {
    api
      .delete(`/personagens/${id}`)
      .then((res) => {
        alert("Personagem excluído com sucesso");
        router.reload();
      })
      .catch((err) => alert("Erro ao excluir"));
  };

  const editarPersonagem = (id) => {
    router.push("/editar-per/" + id);
  };

  return (
    <div className={styles.container}>
      <p>{personagem.pernome}</p>
      <span>Classe: {personagem.perclasse}</span>
      <span>Experiência: {personagem.perexperiencia}</span>
      <span>Pontos de Vida: {personagem.perpontosvida}</span>
      <span>Mana: {personagem.permana}</span>
      {personagem.perimagem && (
        <img src={personagem.preview ?? "https://encurtador.com.br/h8cW7"} alt={personagem.pernome} className={styles.image} />
      )}
      <button
        type="button"
        className={styles.btnEditar}
        onClick={() => editarPersonagem(personagem.id)}
      >
        Editar
      </button>
      <button
        type="button"
        className={styles.btnExcluir}
        onClick={() => excluirPersonagem(personagem.id)}
      >
        Excluir
      </button>
    </div>
  );
}
