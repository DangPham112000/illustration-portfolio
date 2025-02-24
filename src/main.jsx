import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Magic from "./pages/Magic.jsx";
import Life from "./pages/Life.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { NavBarProvider } from "./context/NavBarContext.jsx";

createRoot(document.getElementById("root")).render(
  <NavBarProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="magic" element={<Magic />} />
          <Route path="life" element={<Life />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </NavBarProvider>
);
