import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Layout } from "./components/Layout";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { TopNav } from "./components/TopNav";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="wrapper">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Hero />
              </Layout>
            }
          />
          <Route path="/about" element={<AboutMe />} />
          <Route
            path="/skills"
            element={
              <Layout>
                {" "}
                <Skills />
              </Layout>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
