import { Fragment } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </Fragment>
  );
};
export default App;
