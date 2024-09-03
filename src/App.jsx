import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Input from "./components/inputCon/Input";
import Select from "./components/inputCon/Select";
import SaveBtn from "./components/inputCon/SaveBtn";
import Search from "./components/listArea/Search";
import InfoList from "./components/listArea/InfoList";

const dump = [
  {
    name: "박은규",
    phone: "010-1111-1111",
    group: "가족",
  },
  {
    name: "김영희",
    phone: "010-2222-2222",
    group: "직장",
  },
  {
    name: "박민수",
    phone: "010-3333-3333",
    group: "친구",
  },
  {
    name: "순삼이",
    phone: "010-4444-4444",
    group: "친구",
  },
];
function App() {
  const [formData, setFormData] = useState({
    이름: "",
    전화번호: "",
    그룹: "",
    정보: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // 모든 필드가 채워졌는지 확인
    for (let key in formData) {
      if (formData[key] === "") {
        return;
      }
    }
    const prevList = JSON.parse(localStorage.getItem("list")) || [];
    const currentList = [...prevList, formData];
    localStorage.setItem("list", JSON.stringify(currentList));
    setFormData({
      이름: "",
      전화번호: "",
      그룹: "",
      정보: "",
    });
  };

  return (
    <>
      <Header />
      <main>
        <form onSubmit={submitHandler}>
          <Input name="이름" value={formData.이름} onChange={inputHandler} />
          <Input
            name="전화번호"
            value={formData.전화번호}
            onChange={inputHandler}
          />
          <Select name="그룹" onChange={inputHandler} value={formData.그룹} />
          <Input name="정보" value={formData.정보} onChange={inputHandler} />
          <SaveBtn />
        </form>
        <div className="infoCon">
          <Search />
          <InfoList list={dump} />
        </div>
      </main>
    </>
  );
}

export default App;
