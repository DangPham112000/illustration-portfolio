import { createRoot } from "react-dom/client";
import "swiper/css";
import "swiper/css/free-mode";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBarProvider } from "./context/NavBarContext.jsx";
import { lazy, Suspense } from "react";
import App from "./App.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Magic = lazy(() => import("./pages/Magic.jsx"));
const Life = lazy(() => import("./pages/Life.jsx"));
const MagicDetail = lazy(() => import("./pages/MagicDetail.jsx"));
const About = lazy(() => import("./pages/About.jsx"));

createRoot(document.getElementById("root")).render(
  <NavBarProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route
            path=""
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="magic"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Magic />
              </Suspense>
            }
          />
          <Route
            path="life"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Life />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="magicDetail/:id"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <MagicDetail />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  </NavBarProvider>
);
