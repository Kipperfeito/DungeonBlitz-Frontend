import { useRouter } from "next/router";
import api from "@/services/api";
import { useEffect, useState } from "react";
import styles from "@/styles/Form.module.css";

export default function EditarPersonagem() {
  const [personagem, setPersonagem] = useState({});
  const [id, setId] = useState(0);
  const router = useRouter();

  const getPersonagem = async (id) => {
    try {
      const result = await api.get(`/personagens/${id}`);
      setPersonagem(result.data);
    } catch (err) {
      console.error("Erro ao buscar personagem:", err);
      alert("Ocorreu um erro ao buscar o personagem!");
      alert(err?.response?.data?.message || err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      await api.put(`/personagens/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Personagem editado com sucesso!");
      router.push("/listagem-per");
    } catch (err) {
      console.error("Erro ao editar personagem:", err);
      alert("Ocorreu um erro ao editar o personagem!");
      alert(err?.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    const id = Number(router.query.id);
    if (!isNaN(id)) {
      setId(id);
      getPersonagem(id);
    }
  }, [router.query.id]);

  return (
    <div className={styles.container}>
      <h3>Editar Personagem</h3>
      <form onSubmit={handleSubmit} className={styles.formCadastro}>
        <label htmlFor="pernome">Nome: </label>
        <input
          type="text"
          id="pernome"
          name="pernome"
          defaultValue={personagem.pernome}
          required
        />

        <label htmlFor="perclasse">Classe: </label>
        <input
          type="text"
          id="perclasse"
          name="perclasse"
          defaultValue={personagem.perclasse}
          required
        />

        <label htmlFor="perimagem">Imagem: </label>
        <input
          type="file"
          id="perimagem"
          name="perimagem"
          accept="image/png, image/jpg, image/jpeg"
        />

        <label htmlFor="perexperiencia">Experiência: </label>
        <input
          type="number"
          id="perexperiencia"
          name="perexperiencia"
          defaultValue={personagem.perexperiencia || 0}
        />

        <label htmlFor="perpontosvida">Pontos de Vida: </label>
        <input
          type="number"
          id="perpontosvida"
          name="perpontosvida"
          defaultValue={personagem.perpontosvida || 100}
        />

        <label htmlFor="permana">Mana: </label>
        <input
          type="number"
          id="permana"
          name="permana"
          defaultValue={personagem.permana || 50}
        />

        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}
