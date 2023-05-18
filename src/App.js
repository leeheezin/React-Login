import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/main" element={<Main/>} />
        </Routes>
    </Router>
  );
}

export default App;
