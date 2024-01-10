import HomePage from "./components/home";
import ProjectPage from "./components/project";
import OdPage from "./components/od";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/od" element={<OdPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
