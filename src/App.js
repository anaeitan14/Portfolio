import NavbarMenu from "./components/NavbarMenu"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
