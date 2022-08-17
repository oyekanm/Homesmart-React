import React from "react";
import Header from "./components/Header";
import Qualities from "./components/Qualities";
import Partners from "./components/Partners";
import Display from "./components/Display";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Qualities />
      <Partners />
      <Display />
      <Contact />
    </React.Fragment>
  );
}

export default App;
