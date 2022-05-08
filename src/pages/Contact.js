import video from "../assets/contact.mp4";
import ContacForm from "../components/ContactForm";
import { AnimatedPage } from "../components/AnimatedPage";
import "../styles/Contact.css";

export default function Contact() {

  return (
    <AnimatedPage>
      <div className="container-fluid container-lg">
        <div className="row g-0 d-flex contact justify-content-center align-items-center">
          <div className="col-lg-4 me-lg-5 pt-5 pt-lg-0 mt-5 mt-lg-0 text-center">
            <h3>
              Para clases particulares, participación en proyectos u ofertas laborales, usa el formulario
              <span className="d-none d-lg-inline"> de la derecha</span>
              <span className="d-inline d-lg-none"> abajo</span>
            </h3>
          </div>
          <ContacForm />

          <div
            className="col-2 d-none d-lg-block about-3 img-side vh-100 position-absolute end-0 "
            style={{ overflow: "hidden" }}
          >
            <video className="video" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
