function Select() {
  return (
    <div className="selectCon">
      <label htmlFor="그룹">그룹</label>
      <div>
        <select id="그룹">
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
