import "./App.css";
import Header from "./components/header/Header";
import Input from "./components/inputCon/Input";
import Select from "./components/inputCon/Select";
import SaveBtn from "./components/inputCon/SaveBtn";
import Search from "./components/listArea/Search";
import InfoList from "./components/listArea/InfoList";

function App() {
  return (
    <>
      <Header />
      <main>
        <form>
          <Input name="이름" />
          <Input name="전화번호" />
          <Select />
          <Input name="간단한기록" />
          <SaveBtn />
        </form>
        <div className="infoCon">
          <Search />
          <InfoList />
        </div>
      </main>
    </>
  );
}

export default App;
