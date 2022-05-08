import React from "react";
import { AnimatedPage } from "../components/AnimatedPage";
import {
  AboutMain,
  AboutAbility,
  AboutCurriculum,
} from "../components/AboutComponent";
import "../styles/About.css";

export default function About(props) {
  return (
    <AnimatedPage>
      <div className="container-lg container-fluid">
        <div
          className="row justify-content-center align-items-center"
          id="main"
        >
          <AboutMain />
          <div className="d-none d-lg-block about-1 img-side shadow-custom vh-100 position-absolute end-0"></div>
        </div>

        <div className="row vh-100 d-flex justify-content-center" id="ability">
          <AboutAbility props={props} />
          <div className="col-2 d-none d-lg-block about-2 img-side shadow-custom vh-100 position-absolute end-0"></div>
        </div>

        <div className="row d-flex justify-content-center" id="curriculum">
          <AboutCurriculum />
          <div className="col-2 d-none d-lg-block about-3 img-side shadow-custom vh-100 position-absolute end-0"></div>
        </div>
      </div>
    </AnimatedPage>
  );
}
