import React from "react";
import p1 from "../assets/p1.png";
import { Layout } from "./Layout";

export const Projects = () => {
  return (
    <Layout>
      <div id="projects" class="projects py-3">
        <div class="title">
          <span>Projects</span>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md mb-3">
              <img src={p1} alt="portfolio project" width="100%" />
            </div>
            <div class="col-md">
              <h2>My Portfoli site</h2>
              <div>
                <a href="#">
                  <i class="fa-brands fa-square-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-3 fw-bold">
                Tech Used: HTML, CSS, JavaScript, React
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                cum rem blanditiis voluptates sit quae veritatis enim eum, ullam
                incidunt nemo deserunt tempore esse nostrum quibusdam quidem
                nesciunt rerum vel.
              </p>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-md order-md-2 mb-3">
              <img src={p1} alt="portfolio project" width="100%" />
            </div>
            <div class="col-md">
              <h2>My Portfoli site</h2>
              <div>
                <a href="#">
                  <i class="fa-brands fa-square-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-3 fw-bold">
                Tech Used: HTML, CSS, JavaScript, React
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                cum rem blanditiis voluptates sit quae veritatis enim eum, ullam
                incidunt nemo deserunt tempore esse nostrum quibusdam quidem
                nesciunt rerum vel.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <img src={p1} alt="portfolio project" width="100%" />
            </div>
            <div class="col-md">
              <h2>My Portfoli site</h2>
              <div>
                <a href="#">
                  <i class="fa-brands fa-square-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-3 fw-bold">
                Tech Used: HTML, CSS, JavaScript, React
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                cum rem blanditiis voluptates sit quae veritatis enim eum, ullam
                incidunt nemo deserunt tempore esse nostrum quibusdam quidem
                nesciunt rerum vel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
