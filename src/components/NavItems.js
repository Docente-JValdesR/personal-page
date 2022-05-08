import { Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <ul className="navbar-nav flex-column text-center">
      <li className="nav-item">
        <Link to="/" className="nav-link active a" aria-current="page">
          Inicio
        </Link>
      </li>
      <li className="nav-item">
        <Link to="about" className="nav-link a">
          Acerca de Mi
        </Link>
      </li>
      <li className="nav-item">
        <Link to="project" className="nav-link disabled">
          Proyectos
        </Link>
      </li>
      <li className="nav-item">
        <Link to="contact" className="nav-link a">
          Contactame
        </Link>
      </li>
    </ul>
  );
}

export const FooterMenu = () => {
  return (
    <div className="container text-center text-white p-3 fs-5" >
      <p data-bs-dismiss="offcanvas">
        © Copyright 2022 | Todos los derechos reservados
        <a
          href="https://webdesignvaldes.com"
          target="_blank"
          rel="noreferrer"
          className="a text-white ms-2 nav-link"
        >
          webdesignvaldes.com
        </a>
      </p>
    </div>
  );
}