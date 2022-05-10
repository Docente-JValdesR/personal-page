import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useIsLarge } from "./hooks/useIsScreen";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import { Helmet } from "react-helmet";
export default function App() {
  const isLarge = useIsLarge();
  const location = useLocation();

  return (
    <>
       <Helmet>
        <title>Profe Valdés</title>
        <meta
          name="description"
          content="página personal para compartir mi perfil y proyectos desarrollados como profesor y como desarrollador web"
        />
        <meta
          name="keywords"
          content="docente, profesor, matemáticas, clases particulares, desarrollo web, programación, diseño, "
        />
        <meta name="author" content="José Valdés Romero" />

        <meta name="copyright" content="José Valdés Romero" />
      </Helmet>
      <div className="bg-color" style={{ overflow: "hidden" }}>
        <Navbar props={isLarge} />
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About props={isLarge} />} />
            <Route path="contact" element={<Contact props={isLarge} />} />
            <Route path="project" element={<Project />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}
