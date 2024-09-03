import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Input from "./components/inputCon/Input";
import Select from "./components/inputCon/Select";
import SaveBtn from "./components/inputCon/SaveBtn";
import Search from "./components/listArea/Search";
import InfoList from "./components/listArea/InfoList";

function App() {
  // 등록 정보 데이터
  const [formData, setFormData] = useState({
    이름: "",
    전화번호: "",
    그룹: "",
    정보: "",
  });
  // 검색 입력 데이터
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]); // 검색 결과 저장
  const [isAll, setIsAll] = useState(true); // 전체 결과 보기 여부

  const searchHandler = (e) => {
    setSearch(e.target.value);
    if (e.key === "Enter") {
      const storedList = JSON.parse(localStorage.getItem("list")) || [];

      // 검색어와 일치하는 항목 필터링
      const filteredResults = storedList.filter((item) => {
        return (
          item.이름.includes(search) ||
          item.전화번호.includes(search) ||
          item.그룹.includes(search)
        );
      });

      setSearchResult(filteredResults);
      setIsAll(false);
      e.target.value = "";
    }
  };
  // console.log(search.target.value);

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
          <Search onChange={searchHandler} isAll={() => setIsAll(true)} />
          <InfoList
            list={
              isAll ? JSON.parse(localStorage.getItem("list")) : searchResult
            }
          />
        </div>
      </main>
    </>
  );
}
// JSON.parse(localStorage.getItem("list"))
export default App;
