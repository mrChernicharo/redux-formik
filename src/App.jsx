// import PatientsSection from "./components/PatientsSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientsPage from "./containers/PatientsContainer";
import HomePage from "./pages/HomePage";
import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patients" element={<PatientsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
