
import {FirstSection} from "./components/section/first-section";
import { Routes, Route } from "react-router-dom";
import SecondSection from "./components/section/second-section";
import ThirdSection from "./components/section/third-section";
import ForthSection from "./components/section/forth-section";
import FooterSection from "./components/section/footer-section";
import Project from "./components/projects";
import Certificates from "./components/section/certifications";
import Experience from "./components/section/experience";

export default function App(){
  return(
      <>
        <Routes>
          <Route path="/" element={
              <>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <Certificates />
                <Experience />
                <ForthSection />
                <FooterSection />
              </> 
          } />

          <Route path="/projects" element={<Project />} />

        </Routes>
      </>
      
  );
}

