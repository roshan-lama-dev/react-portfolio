import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Layout } from "./components/Layout";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { TopNav } from "./components/TopNav";

function App() {
  return (
    <Layout>
      <div class="wrapper">
        {/* <!-- navbar --> */}
        <TopNav />

        {/* <!-- hero section --> */}
        <Hero />

        {/* <!-- skills --> */}
        <Skills />

        {/* <!-- projects --> */}
        <Projects />

        {/* <!-- about me --> */}
        <AboutMe />

        {/* <!-- contact me --> */}
        <Contact />

        {/* <!-- footer --> */}
      </div>
    </Layout>
  );
}

export default App;
