function Select({ name, onChange, value }) {
  return (
    <div className="selectCon">
      <label htmlFor="그룹">{name}</label>
      <div>
        <select id="그룹" onChange={onChange} value={value} name={name}>
          <option value="">선택하세요</option>
          <option value="가족">가족</option>
          <option value="직장">직장</option>
          <option value="친구">친구</option>
        </select>
        <button>조직추가</button>
      </div>
    </div>
  );
}

export default Select;
