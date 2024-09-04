import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Input from "./components/inputCon/Input";
import Select from "./components/inputCon/Select";
import SaveBtn from "./components/inputCon/SaveBtn";
import Search from "./components/listArea/Search";
import InfoList from "./components/listArea/InfoList";
import Detail from "./components/modal/Detail";

function App() {
  // 등록 정보 데이터
  const [formData, setFormData] = useState({
    이름: "",
    전화번호: "",
    그룹: "",
    정보: "",
  });
  // input 에러 메세지
  const [errors, setErrors] = useState({
    이름: "",
    전화번호: "",
    그룹: "",
    정보: "",
  });
  // 세부사항 모달 데이터
  const [detailData, setDetailData] = useState({
    이름: "",
    전화번호: "",
    그룹: "",
    정보: "",
  });
  // 검색 입력 데이터
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]); // 검색 결과 저장
  const [isAll, setIsAll] = useState(true); // 전체 결과 보기 여부
  const [list, setList] = useState([]); // 전체 결과 데이터 저장
  const [isDetail, setIsDetail] = useState(false); // 세부사항 모달 open 여부

  // input 정규표현식으로 유효성 검사
  const validateInput = (name, value) => {
    switch (name) {
      case "이름":
        if (!/^[가-힣]{2,}$/.test(value)) {
          return "이름은 두 글자 이상의 한글이어야 합니다.";
        }
        break;
      case "전화번호":
        if (!/^\d{3}-\d{3,4}-\d{4}$/.test(value)) {
          return "전화번호 형식이 올바르지 않습니다. (예: 010-0000-0000)";
        }
        break;
      case "그룹":
        if (value === "") {
          return "그룹을 선택해야 합니다.";
        }
        break;
      case "정보":
        if (value.length < 3) {
          return "정보는 최소 3자 이상이어야 합니다.";
        }
        break;
      default:
        return "";
    }
    return "";
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
    if (e.key === "Enter") {
      const list = JSON.parse(localStorage.getItem("list")) || [];

      // 검색어와 일치하는 항목 필터링
      const filteredResults = list.filter((item) => {
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

    // 입력값 유효성 검사
    const errorMessage = validateInput(name, value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: errorMessage,
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
    const newList = [...list, formData];
    localStorage.setItem("list", JSON.stringify(newList));
    setList(newList);

    setFormData({
      이름: "",
      전화번호: "",
      그룹: "",
      정보: "",
    });
  };

  const updateHandler = (newList) => {
    localStorage.setItem("list", JSON.stringify(newList));
    setList(newList);
  };

  // detail 모달 open
  const detailModalHandler = (id) => {
    console.log(id);
    const detailInfo = list.find((item, index) => id === index);

    console.log(detailInfo);
    setDetailData({
      이름: detailInfo.이름,
      전화번호: detailInfo.전화번호,
      그룹: detailInfo.그룹,
      정보: detailInfo.정보,
    });
    setIsDetail(true);
  };
  console.log(detailData);

  useEffect(() => {
    // 초기 데이터 로딩
    const storedList = JSON.parse(localStorage.getItem("list")) || [];
    setList(storedList);
  }, []);

  return (
    <>
      {isDetail ? (
        <Detail detailData={detailData} closeBtn={() => setIsDetail(false)} />
      ) : null}

      <div className="wrapper">
        <Header />
        <main>
          <form onSubmit={submitHandler}>
            <Input name="이름" value={formData.이름} onChange={inputHandler} />
            {errors.이름 && <span className="errorMsg">{errors.이름}</span>}
            <Input
              name="전화번호"
              value={formData.전화번호}
              onChange={inputHandler}
            />
            {errors.전화번호 && (
              <span className="errorMsg">{errors.전화번호}</span>
            )}
            <Select name="그룹" onChange={inputHandler} value={formData.그룹} />
            {errors.그룹 && <span className="errorMsg">{errors.그룹}</span>}
            <Input name="정보" value={formData.정보} onChange={inputHandler} />
            {errors.정보 && <span className="errorMsg">{errors.정보}</span>}
            <SaveBtn />
          </form>
          <div className="infoCon">
            <Search onChange={searchHandler} isAll={() => setIsAll(true)} />
            <InfoList
              list={isAll ? list : searchResult}
              updateList={updateHandler}
              detailModal={detailModalHandler}
            />
          </div>
        </main>
      </div>
    </>
  );
}
// JSON.parse(localStorage.getItem("list"))
export default App;
