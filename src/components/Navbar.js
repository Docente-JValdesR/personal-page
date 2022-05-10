import { Link } from "react-router-dom";
import {NavLinks , FooterMenu} from "./NavItems";
import '../styles/Navbar.css'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top col-lg-2 col-12">
      <div className={ props.props ? "container-fluid":"container-fluid flex-column vh-100 justify-content-center"}>
        <Link className="navbar-brand" to="/">
          <h1 className="ms-4">Profe Valdés</h1>
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navLinks" >
          <NavLinks />
        </div>

        <div className="d-lg-none">
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
            data-bs-dismiss="offcanvas"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title text-light display-6"
                id="offcanvasWithBothOptionsLabel"
              >
                Menú
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white text-reset "
                data-bs-dismiss="offcanvas"
                aria-label="close"
              />
            </div>
            <div className="offcanvas-body">
              <NavLinks />
              <FooterMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
