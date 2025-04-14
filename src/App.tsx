import "./App.css";
import Form from "./components/Form";
import mainLogo from "./assets/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UsefulLinks from "./components/UsefulLinks";

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-4">
        <div>
          <img src={mainLogo} className="logo" />
          <h2>Convertisseur pour journaliste</h2>
        </div>
        <nav>
          <Link to="/" className="mr-4">
            Accueil
          </Link>
          <Link to="/liens" className="text-blue-600 hover:text-blue-800">
            Liens
          </Link>
        </nav>
        <div className="border-b border-white/30" />
        <div className="min-w-full">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/liens" element={<UsefulLinks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
