import { useState } from "react";

function Group({ closeBtn, onClick, groupLi }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="backdrop">
      <div className="modal">
        <button className="closeBtn" onClick={closeBtn}>
          닫기
        </button>
        <h1>그룹 관리</h1>
        <ul>
          {groupLi.map((item) => (
            <li key={item}>{item}</li>
          ))}
          {/* <li>가족</li>
          <li>직장</li>
          <li>친구</li> */}
        </ul>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="새 그룹 이름"
        />
        <button
          onClick={() => {
            onClick(inputValue);
            setInputValue("");
          }}
        >
          추가
        </button>
      </div>
    </div>
  );
}

export default Group;
