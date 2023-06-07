import React from "react";

import { GlobalStyles } from "./GlobalStyles";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
