import { Fragment } from "react";
import {FirstSection} from "./components/first-section";
import { Test } from "./components/tes";
import SecondSection from "./components/second-section";
import ThirdSection from "./components/third-section";

export default function App(){
  return(
    <Fragment>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      {/* <Test /> */}
    </Fragment>
  );
}

