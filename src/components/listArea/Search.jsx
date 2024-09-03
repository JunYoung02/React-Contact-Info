function Search({ onChange, isAll }) {
  return (
    <div className="searchCon">
      <input
        type="text"
        placeholder="검색어 입력 후 엔터를 누르세요"
        // onChange={onChange}
        onKeyUp={onChange}
      />
      <button onClick={isAll}>전체 리스트 보기</button>
    </div>
  );
}

export default Search;
