import { Fragment } from "react";
import {FirstSection} from "./components/first-section";
import { Test } from "./components/tes";
import SecondSection from "./components/second-section";

export default function App(){
  return(
    <Fragment>
      <FirstSection />
      <Test />
    </Fragment>
  );
}

