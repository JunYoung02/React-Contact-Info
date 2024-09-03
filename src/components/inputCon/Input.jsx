function Input({ name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        placeholder={name}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
