import React from "react";
import prem from "../assets/prem.png";
import Rectangle3image from "../assets/Rectangle3image.png";

export const Hero = () => {
  return (
    <section class="hero">
      <div class="container">
        <div class="row py-5">
          <div class="col-md-5 text-center order-md-2">
            <img src={Rectangle3image} alt="my image" width="90%" />
          </div>

          <div class="col-md-7 mt-5 pt-5">
            hi 👋 i'm
            <span class="fw-bold">Roshan Lama</span>
            <div class="mt-2 mb-5 fs-3 fw-bold">
              Software Engineer | Coding Enthusiast
            </div>
            <p>
              I love coding and solving problems with code and learning what i
              don't know that makes me feel happy
            </p>
            <button class="btn btn-danger">
              Download Resume <i class="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
