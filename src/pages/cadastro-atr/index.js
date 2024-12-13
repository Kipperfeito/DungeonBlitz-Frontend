import api from "@/services/api";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/AtrForm.module.css"

export default function CadastroAtributos() {
    const router = useRouter();
    const [atributos, setAtributos] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            atrforca,
            atragilidade,
            atrinteligencia,
            atrresistencia,
            atrsorte,
            atrdestreza
        } = e.target;

        const atributosSalvar = {
            atrforca: atrforca.value,
            atragilidade: atragilidade.value,
            atrinteligencia: atrinteligencia.value,
            atrresistencia: atrresistencia.value,
            atrsorte: atrsorte.value,
            atrdestreza: atrdestreza.value,
        };

        api
            .post("/atributos/", atributosSalvar)
            .then((res) => {
                console.log(res.data);
                alert("Atributos salvos com sucesso!");
                // router.push("/listagem-atributos"); // Redirecionar após salvar
            })
            .catch((err) => {
                console.error(err);
                alert("Ocorreu um erro ao salvar os atributos!");
                alert(err?.response?.data?.message ?? err.message);
            });
    };

    return (
        <>
            <div className={styles.container}>
                <h3>Formulário de Cadastro de Atributos</h3>
                <form onSubmit={handleSubmit} className={styles.formCadastro}>
                    <label htmlFor="atrforca">Força: </label>
                    <input type="number" id="atrforca" name="atrforca" defaultValue={10} /> 

                    <label htmlFor="atragilidade">Agilidade: </label>
                    <input type="number" id="atragilidade" name="atragilidade" defaultValue={10} /> 

                    <label htmlFor="atrinteligencia">Inteligência: </label>
                    <input type="number" id="atrinteligencia" name="atrinteligencia" defaultValue={10} /> 

                    <label htmlFor="atrresistencia">Resistência: </label>
                    <input type="number" id="atrresistencia" name="atrresistencia" defaultValue={10} /> 

                    <label htmlFor="atrsorte">Sorte: </label>
                    <input type="number" id="atrsorte" name="atrsorte" defaultValue={10} /> 

                    <label htmlFor="atrdestreza">Destreza: </label>
                    <input type="number" id="atrdestreza" name="atrdestreza" defaultValue={10} /> 

                    <button type="submit">Salvar</button>
                </form>
            </div>
        </>
    )
    
}
