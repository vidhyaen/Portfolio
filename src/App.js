import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Myskill from "./components/Myskill";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="App App-header">
      <Main />
      <Myskill />
    </div>
  );
}

export default App;
