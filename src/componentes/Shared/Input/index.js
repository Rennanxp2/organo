import "./Input.css";

const Input = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        required={props.obrigatorio}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.aoAlterado(event.target.value)}
      />
    </div>
  );
};

export default Input;
