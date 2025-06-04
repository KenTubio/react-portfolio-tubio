import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactMe from "../contact-me";
import { FiChevronsDown } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";

export function FirstSection() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <Fragment>
      <header className=" flex justify-between items-center fixed left-0 right-0 top-0 px-16 sm:px-4 pt-5 z-10">
        <a href="" aria-label="home">
          <img
            className="w-28 sm:w-20
                    "
            src="./images/new-logoni-bro.png"
            alt="Logo"
          />
        </a>

        <ContactMe />
      </header>

      <section className=" h-screen flex flex-col justify-end gap-6 p-28 sm:p-3 md:items-center md:text-center md:justify-center relative">
        <div className="flex gap-2 font-handjet text-5xl lg:text-4xl font-bold tracking-widest text-slate-400">
          <h1>Hi, I'm</h1>
          <div>
            <span className="animate-bounce [animation-delay:0ms] inline-block">
              K
            </span>
            <span className="animate-bounce [animation-delay:100ms] inline-block">
              E
            </span>
            <span className="animate-bounce [animation-delay:200ms] inline-block">
              N
            </span>
            <span className="animate-bounce [animation-delay:300ms] inline-block">
              N
            </span>
            <span className="animate-bounce [animation-delay:400ms] inline-block">
              E
            </span>
            <span className="animate-bounce [animation-delay:500ms] inline-block">
              T
            </span>
            <span className="animate-bounce [animation-delay:600ms] inline-block">
              H.
            </span>
          </div>
        </div>

        <p
          className="font-inter text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-white antialiased tracking-wide w-4/5 lg:w-full leading-tight"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          I'm a front-end web developer and web designer.
        </p>

        <p
          className="text-slate-600 text-xl sm:text-sm md:text-base font-inter antialiased w-9/12 lg:w-full"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="1000"
        >
          I’m a aspiring front-end web developer who helps in creating
          user-friendly web applications. I focus on building responsive designs
          and simple, functional interfaces that enhance the user experience.
        </p>

        <button
          className="text-white text-3xl flex items-center gap-2 sm:text-sm md:text-base font-inter tracking-widest hover:underline transition hover:underline-offset-8 antialiased w-fit group hover:text-slate-400"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="1500"
          onClick={() => {
            window.open("/Kenneth Tubio.pdf", "_blank");
          }}
        >
          View RESUME
          <span className="transition animate-asideL">
            <GoArrowLeft />
          </span>
        </button>

        <a
          href="#second-section"
          className=" text-white hidden absolute bottom-28 md:block text-4xl animate-bounce cursor-pointer"
        >
          <FiChevronsDown />
        </a>
      </section>
    </Fragment>
  );
}
