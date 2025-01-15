import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Button from "./components/Button";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import Team from "./components/Team";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Roadmap />
        <Team />
        {/* <Collaboration /> */}
        {/* <Services /> */}
        {/* <Pricing /> */}
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
