import "./Profile.css";

const Profile = ({ nome, cargo, imagem, corPrimaria }) => {
  return (
    <div className="perfil">
      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={imagem} alt={imagem} />
      </div>
      <div className="corpo">
        <h4>{nome}</h4>
        <p>{cargo}</p>
      </div>
    </div>
  );
};

export default Profile;
