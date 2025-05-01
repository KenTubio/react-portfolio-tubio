
import {FirstSection} from "./components/section/first-section";
import { Routes, Route } from "react-router-dom";
import SecondSection from "./components/section/second-section";
import ThirdSection from "./components/section/third-section";
import ForthSection from "./components/section/forth-section";
import FooterSection from "./components/section/footer-section";
import Project from "./components/projects";

export default function App(){
  return(
      <>
        <Routes>
          <Route path="/" element={
              <>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <ForthSection />
                <FooterSection />
              </> 
          } />

          <Route path="/projects" element={<Project />} />

        </Routes>
      </>
      
  );
}

