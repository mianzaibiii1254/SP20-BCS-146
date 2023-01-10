import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Container/Home";
import Signin from "./Container/Signin";
import Signup from "./Container/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
