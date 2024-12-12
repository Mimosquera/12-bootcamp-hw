import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project"

const App = () => {
  return (
    <div id="app">
      <Header />
      <main>
        <p>Portfolio Content</p>
        <Project />
      </main>
      <Footer />
    </div>
  );
};

export default App;
