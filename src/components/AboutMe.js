import React from "react";
import prem from "../assets/prem.png";
export const AboutMe = () => {
  return (
    <section id="about" class="container">
      <div class="title">
        <span>About Me</span>
      </div>
      <div class="row">
        <div class="col-md-4 mb-3">
          <img src={prem} alt="some img" width="100%" />
        </div>
        <div class="col-md-8">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsam
            ad fuga, cumque qui fugit inventore vel deleniti minus tempore
            officiis eius blanditiis iusto perferendis officia odit atque
            asperiores soluta.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsam
            ad fuga, cumque qui fugit inventore vel deleniti minus tempore
            officiis eius blanditiis iusto perferendis officia odit atque
            asperiores soluta.
          </p>
        </div>
      </div>
    </section>
  );
};
