import { Fragment } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Home />
      </main>
    </Fragment>
  );
};
export default App;
