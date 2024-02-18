import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SearchPage from "./Components/SearchPage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Articles from "./Components/Articles";
import Home from "./Components/Home";
import Summarize from "./Components/Summarize";
import Bookmark from "./Components/Bookmark";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/summarize" element={<Summarize />}></Route>
          <Route path="/bookmark" element={<Bookmark />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
