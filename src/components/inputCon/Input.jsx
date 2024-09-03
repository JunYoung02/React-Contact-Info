function Input({ name }) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type="text" placeholder={name} id={name} />
    </div>
  );
}

export default Input;
