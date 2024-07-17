import Navigation from "./components/navigation";
import Hero from "./components/hero";
import WhatCover from "./components/whatCover";
import WhereBased from "./components/whereBased";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="layout">
      <Navigation />
      <Hero />
      <WhatCover />
      <WhereBased />
      <Contact />
      <div className="footer">
        <img
          className="footer-logo"
          src="./src/assets/smiley'sLogoTrans.png"
          alt="Smiley's Logo"
        />
        <h2>Smileys Landscaping and Tree Specialists</h2>
      </div>
    </div>
  );
};

export default App;
