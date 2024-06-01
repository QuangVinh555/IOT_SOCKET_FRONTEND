
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/reset.css";
import Home from "./pages/Home/Home";
import Question from "./pages/Question/Question";
import Statistic from "./pages/Statistic/Statistic";
import BeginGame from "./pages/BeginGame/BeginGame";
import ConnectRemote from "./pages/ConnectRemote/ConnectRemote";
import Default from "./layout/Default/Default";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element = {<Default />}>
            <Route index path="/" element = {<Home />} />
            <Route path="/question" element = {<Question />} />
            <Route path="/statistic" element = {<Statistic />} />
            <Route path="/begingame" element = {<BeginGame />} />
            <Route path="/connect-remote" element = {<ConnectRemote />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
