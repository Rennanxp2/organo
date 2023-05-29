import "./Team.css";
import Profile from "../Profile";

const Team = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.params.corSecundaria }}
      >
        <h3 style={{ borderColor: props.params.corPrimaria }}>
          {props.params.nome}
        </h3>

        <div className="perfils">
          {props.colaboradores.map((colaborador) => (
            <Profile
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corPrimaria={props.params.corPrimaria}
              corSecundaria={props.params.corSecundaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
