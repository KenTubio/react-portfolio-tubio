import { Fragment } from "react";
import {FirstSection} from "./components/first-section";
import { Test } from "./components/tes";
import SecondSection from "./components/second-section";
import ThirdSection from "./components/third-section";
import ForthSection from "./components/forth-section";
import FooterSection from "./components/footer-section";

export default function App(){
  return(
    <Fragment>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FooterSection />
      {/* <Test /> */}
    </Fragment>
  );
}

