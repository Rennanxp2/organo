import { useState } from "react";
import Header from "./componentes/Shared/Header";
import Form from "./componentes/Form";
import Team from "./componentes/Shared/Team";
import Footer from "./componentes/Shared/Footer"

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const submit = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Header />
      <Form
        aoColaboradorCadastrado={(colaborador) => submit(colaborador)}
        times={times.map((time) => time.nome)}
      />

      {times.map((time) => (
        <Team
          key={time.nome}
          params={time}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}

      <Footer></Footer>
    </div>
  );
}

export default App;
