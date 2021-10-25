import React from "react";
import "tailwindcss/dist/base.css";
import AnimationWrapper from "helpers/AnimationRevealPage";
import Features from "components/features/ThreeColWithSideImage";
import About from "components/features/TwoColWithButton";
import TeamMembers from "components/cards/ProfileThreeColGrid";
import Footer from "components/footers/MiniCenteredFooter";
import SingleCol from "components/faqs/SingleCol";
// import Khronos from "khronos/index-particles.html";

function App() {
  return (
    <AnimationWrapper>
      {/* <Khronos /> */}
      <Features />
      <About />
      <TeamMembers />
      <SingleCol />
      <Footer />
    </AnimationWrapper>
  );
}

export default App;
