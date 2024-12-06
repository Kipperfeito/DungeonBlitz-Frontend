import Header from "@/components/Header";
import { useState } from "react";
import { useRouter } from "next/router";

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
            usuadmin: usuadmin.checked,
            usustatus: usustatus.value
        }
        api
            .post("/", usuarioSalvar)
            .then((res) => {
                console.log(res.data);
                alert("Loja salva com sucesso!");
                router.push("/listagem-personagens");
            })
            .catch((err) => {
                console.error(err);
                alert("Ocorreu um erro ao salvar a loja!");
                alert(err?.response?.data?.message ?? err.message)
            });
    };

    return (
        <>
            <h3>Formulário de Cadastro de Usuários</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome" name="nome" /> <br />
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" /> <br />
                <label htmlFor="dataNascimento">Data de Nascimento: </label>
                <input type="date" id="dataNascimento" name="dataNascimento" /> <br />
                <label htmlFor="senha">Senha: </label>
                <input type="password" id="senha" name="senha" /> <br />
                <label htmlFor="admin">Administrador: </label>
                <input type="checkbox" id="admin" name="admin" />
            </form>
        </>
    )
}
