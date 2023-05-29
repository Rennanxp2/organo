import "./Select.css";

const Select = (props) => {
  return (
    <div className="combo-box">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        className="minimal"
        value={props.value}
        onChange={(event) => props.aoAlterado(event.target.value)}
      >
        <option value="" key="">
          Selecione o time
        </option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
export default Select;
