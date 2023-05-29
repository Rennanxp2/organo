import { useState } from "react";
import Input from "../Shared/Input";
import Select from "../Shared/Select";
import Button from "../Shared/Button";
import "./Form.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const enviarFormulario = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={enviarFormulario}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Input
          label="Nome"
          obrigatorio={true}
          placeholder="Digite seu nome"
          value={nome}
          aoAlterado={(nome) => setNome(nome)}
        />
        <Input
          label="Cargo"
          obrigatorio={true}
          placeholder="Digite seu cargo"
          value={cargo}
          aoAlterado={(cargo) => setCargo(cargo)}
        />
        <Input
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={imagem}
          aoAlterado={(imagem) => setImagem(imagem)}
        />
        <Select
          label="Time"
          obrigatorio={true}
          itens={props.times}
          value={time}
          aoAlterado={(time) => setTime(time)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Formulario;
