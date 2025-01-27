import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fragment } from "react";

export function Test() {
  useEffect(() => {
    AOS.init({});
  }, []);

  let name = "omsim"


  function test(){
   alert(name)
  }

  return (
    <Fragment>

      <div className="flex h-screen justify-center items-center">
        <button
          className="p-5 bg-slate-500 w-fit animate-bounce"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"

          onClick={test}
        >
          hi
        </button>

      </div>
    </Fragment>
  );
}
