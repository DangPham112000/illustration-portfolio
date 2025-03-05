import { createRoot } from "react-dom/client";
import "swiper/css";
import "swiper/css/free-mode";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Magic from "./pages/Magic.jsx";
import Life from "./pages/Life.jsx";
import { NavBarProvider } from "./context/NavBarContext.jsx";
import Abco from "./pages/Abco.jsx";
import MagicDetail from "./pages/MagicDetail.jsx";

createRoot(document.getElementById("root")).render(
  <NavBarProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="magic" element={<Magic />} />
          <Route path="life" element={<Life />} />
          <Route path="abco" element={<Abco />} />
          <Route path="magicDetail/:id" element={<MagicDetail />} />
        </Route>
      </Routes>
    </Router>
  </NavBarProvider>
);
