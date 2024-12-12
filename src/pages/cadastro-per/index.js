import { useRouter } from "next/router";
import api from "@/services/api";

export default function CadastroPersonagem() {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            await api.post("/personagens/", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert("Personagem salvo com sucesso!");
            router.push("/listagem-personagens");
        } catch (err) {
            console.error("Erro ao salvar personagem:", err);
            alert("Ocorreu um erro ao salvar o personagem!");
            alert(err?.response?.data?.message || err.message);
        }
    };

    return (
        <>
            <h3>Formulário de Cadastro de Personagens</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pernome">Nome: </label>
                <input type="text" id="pernome" name="pernome" required /> 

                <label htmlFor="perclasse">Classe: </label>
                <input type="text" id="perclasse" name="perclasse" required /> 

                <label htmlFor="foto">Imagem: </label>
                <input type="file" id="perimagem" name="perimagem" accept="image/png, image/jpg, image/jpeg" /> 

                <label htmlFor="perexperiencia">Experiência: </label>
                <input type="number" id="perexperiencia" name="perexperiencia" defaultValue={0} /> 

                <label htmlFor="perpontosvida">Pontos de Vida: </label>
                <input type="number" id="perpontosvida" name="perpontosvida" defaultValue={100} /> 

                <label htmlFor="permana">Mana: </label>
                <input type="number" id="permana" name="permana" defaultValue={50} /> 

                <button type="submit">Adicionar</button>
            </form>
        </>
    );
}