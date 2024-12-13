import api from "@/services/api";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Form.module.css" ;

export default function CadastroUsuario() {
    const router = useRouter();
    const [usuario, setUsuario] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const {usunome, usuemail, usudatanascimento, ususenha, usuadmin, usustatus} = e.target;
        var usuarioSalvar = {
            usunome: usunome.value,
            usuemail: usuemail.value,
            usudatanascimento: usudatanascimento.value,
            ususenha: ususenha.value,
            usuadmin: usuadmin.checked
        }
        api
            .post("/usuarios/", usuarioSalvar)
            .then((res) => {
                console.log(res.data);
                alert("Usuário salvo com sucesso!");
           //     router.push("/listagem-personagens");
            })
            .catch((err) => {
                console.error(err);
                alert("Ocorreu um erro ao salvar o usuário!");
                alert(err?.response?.data?.message ?? err.message)
            });
    };

    return (
        <>
            <div className={styles.container}>
                <h3>Formulário de Cadastro de Usuários</h3>
                <form onSubmit={handleSubmit} className={styles.formCadastro}>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="usunome" name="usunome" /> <br />
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="usuemail" name="usuemail" /> <br />
                    <label htmlFor="usudatanascimento">Data de Nascimento: </label>
                    <input type="date" id="usudatanascimento" name="usudatanascimento" /> <br />
                    <label htmlFor="senha">Senha: </label>
                    <input type="password" id="ususenha" name="ususenha" /> <br />
                    <label htmlFor="admin">Administrador: </label>
                    <input type="checkbox" id="usuadmin" name="usuadmin" />
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </>
    )
}
