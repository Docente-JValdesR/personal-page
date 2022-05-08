import React from "react";
import { AnimatedPage } from "../components/AnimatedPage";
import { HomeImage, HomeTitle } from "../components/HomeComponent";
import "../styles/Home.css";
export default function Home() {
  return (
    <AnimatedPage>
      <div className="container-fluid container-lg img-home">
        <div className="row g-0 vh-100">
          <HomeImage />
          <HomeTitle />
        </div>
      </div>
    </AnimatedPage>
  );
}
