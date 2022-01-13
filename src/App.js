import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import HomeWrapper from "./View/HomeWrapper"
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomeWrapper/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
