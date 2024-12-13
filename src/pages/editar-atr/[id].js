import api from "@/services/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Form.module.css";

export default function EditarAtributos() {
    const [atributos, setAtributos] = useState({});
    const [_id, setId] = useState(0);
    const router = useRouter();

    const getAtributos = (id) => {
        api
            .get("/atributos/" + id)
            .then((result) => setAtributos(result.data))
            .catch((err) => console.log(err));
    };

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
            .put(`/atributos/${_id}`, atributosSalvar)
            .then((res) => {
                console.log(res);
                alert("Atributos editados com sucesso!");
                router.push("/listagem-atributos");
            })
            .catch((err) => {
                console.error(err);
                alert("Erro ao editar os atributos!");
                alert(err?.response?.data?.message ?? err.message);
            });
    };

    useEffect(() => {
        const _id = Number(router.query.id);
        if (!isNaN(_id)) {
            setId(_id);
            getAtributos(_id);
        }
    }, [router.query.id]);

    return (
        <>
            <div className={styles.container}>
                <h3>Formulário de Edição de Atributos</h3>
                <form onSubmit={handleSubmit} className={styles.formCadastro}>
                    <label htmlFor="atrforca">Força: </label>
                    <input
                        type="number"
                        id="atrforca"
                        name="atrforca"
                        defaultValue={atributos.atrforca}
                    />
                    <br />

                    <label htmlFor="atragilidade">Agilidade: </label>
                    <input
                        type="number"
                        id="atragilidade"
                        name="atragilidade"
                        defaultValue={atributos.atragilidade}
                    />
                    <br />

                    <label htmlFor="atrinteligencia">Inteligência: </label>
                    <input
                        type="number"
                        id="atrinteligencia"
                        name="atrinteligencia"
                        defaultValue={atributos.atrinteligencia}
                    />
                    <br />

                    <label htmlFor="atrresistencia">Resistência: </label>
                    <input
                        type="number"
                        id="atrresistencia"
                        name="atrresistencia"
                        defaultValue={atributos.atrresistencia}
                    />
                    <br />

                    <label htmlFor="atrsorte">Sorte: </label>
                    <input
                        type="number"
                        id="atrsorte"
                        name="atrsorte"
                        defaultValue={atributos.atrsorte}
                    />
                    <br />

                    <label htmlFor="atrdestreza">Destreza: </label>
                    <input
                        type="number"
                        id="atrdestreza"
                        name="atrdestreza"
                        defaultValue={atributos.atrdestreza}
                    />
                    <br />

                    <button type="submit">Salvar</button>
                </form>
            </div>
        </>
    );
}
