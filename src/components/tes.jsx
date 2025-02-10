import React, { useEffect, useState } from "react";
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


  const [userinput, setUserinput] = useState('')

  return (
    <Fragment>

      <div className="flex h-screen flex-col justify-center items-center w-full">
          <input type="text" value={userinput} onChange={(e) =>{
            setUserinput(e.target.value)
          }} />
            
          <h1 className="text-white">Display name:{userinput} </h1>

         
      </div>
    </Fragment>
  );
}
