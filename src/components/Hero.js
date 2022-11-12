import React from "react";
import prem from "../assets/prem.png";

export const Hero = () => {
  return (
    <section class="hero">
      <div class="container">
        <div class="row py-5">
          <div class="col-md-5 text-center order-md-2">
            <img src={prem} alt="my image" width="90%" />
          </div>

          <div class="col-md-7 mt-5 pt-5">
            hi 👋 i'm
            <span class="fw-bold">Prem Acharya</span>
            <div class="mt-2 mb-5 fs-3 fw-bold">
              Software Engineer | Coding Mentor
            </div>
            <p>
              I love codiong and solving problems with code and teaching to
              other what i know that makes me feel happy
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
