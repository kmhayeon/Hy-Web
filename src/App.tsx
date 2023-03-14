import React from "react";
import MainHome from "./components/MainHome";
import Detail from "./components/Detail";
import WorkEx from "./components/WorkEx";
import Education from "./components/Education";
import Portflio from "./components/Portflio";
import Specialty from "./components/Specialty";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={`font-NanumSquareRound h-72 w-full bg-[#eeebe8]`}>
      <MainHome />
      <Detail />
      <Education />
      <WorkEx />
      <Portflio />
      <Specialty />
      <Footer />
    </div>
  );
}

export default App;
