import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import { AiTwotoneHtml5 } from "react-icons/ai";
import { TbBrandTailwind } from "react-icons/tb";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";


export default function Projects() {

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <section className="text-white px-28 sm:p-7 my-28">
        <h1 className="font-handjet font-bold text-5xl pb-20 sm:text-3xl sm:text-center tracking-widest">
          MORE CREATIONS.
        </h1>

        {/* first mini project */}
        <div className="grid grid-cols-2 items-start gap-10 antialiased gap-y-24  lg:grid-cols-1">
          <div
            className=" flex flex-col gap-7"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="relative font-handjet font-bold text-4xl md:text-2xl tracking-wide text-slate-300 w-full flex justify-between items-center">
              EE - Environmental Engineering Page
              <a
                className="text-3xl md:text-2xl hover:scale-125 cursor-pointer transition hover:rotate-45"
                href="https://kentubio.github.io/tubio_portfolio/dist/projects/landing-page.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoArrowUpRight />
              </a>
            </h1>

            <p className="font-inter tracking-widest text-base md:text-sm xs:text-xs leading-7 ">
              This landing page highlights my frontend skills with a clean,
              responsive design using Tailwind CSS for optimal structure and
              adaptability.
            </p>

            <p className="text-slate-400 text-sm md:text-xs xs:text-[0.55rem]">
              I handled the design implementation and developtment, focusing on
              creating a fully responsive layout with Tailwind CSS. I
              implemented flexible grid systems, adaptive styling. This project helped me build a strong
              foundation in responsive web design, allowing me to create
              visually consistent and user-friendly websites.
            </p>

            <a className="flex items-center text-xl underline underline-offset-4 italic hover:text-green-700" href="https://github.com/KenTubio/tubio_portfolio/blob/master/dist/projects/landing-page.html" target="_blank"><LuGithub />Source Code</a>

            <figure className="flex gap-5 text-4xl sm:text-2xl">
              <TbBrandTailwind />
              <AiTwotoneHtml5 />
              <FaJsSquare />
            </figure>
          </div>

          <div
            className="w-full h-full"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <LazyLoad offset={100}>
              <video
                loop
                autoPlay
                muted
                playsInline
                preload="none"
                className="w-full h-full rounded-2xl"
                src="./videos/landingpage.mp4"
                poster="./images/landing.png"
              ></video>
            </LazyLoad>
          </div>

          {/* seconnd mini project */}

          <div
            className=" flex flex-col gap-7"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="relative font-handjet font-bold text-4xl tracking-wide text-slate-300 w-full flex justify-between items-center md:text-2xl">
              Pokemon Apex
              <a
                className="text-3xl md:text-2xl hover:scale-125 cursor-pointer transition hover:rotate-45 "
                href="https://pokeymoen.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoArrowUpRight />
              </a>
            </h1>

            <p className="font-inter tracking-widest text-base leading-7 md:text-sm xs:text-xs">
                Pokémon Apex Game is an interactive ReactJS-based game where player compete by comparing stats such as HP, Attack, and Speed.
            </p>

            <p className="text-slate-400 text-sm md:text-xs xs:text-[0.55rem]">
                I developed the entire game, focusing on dynamic game mechanics and UI interaction. The game evaluates the winner based on 2 out of 3 stats, with React handling the state management and interactivity. This project sharpened my ReactJS skills while providing a fun and engaging experience for players.
            </p>

            <a className="flex items-center text-xl underline underline-offset-4 italic hover:text-green-700" href="https://github.com/KenTubio/pokeDex" target="_blank"><LuGithub />Source Code</a>

            <figure className="flex gap-5 text-4xl sm:text-2xl">
              <FaReact />
              <TbBrandTailwind />
              <FaJsSquare />
            </figure>
          </div>

          <div
            className="w-full h-full"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <LazyLoad offset={100}>
              <video
                loop
                autoPlay
                muted
                playsInline
                preload="none"
                className="w-full h-full rounded-2xl"
                src="./videos/pokemon.mp4"
                poster="./images/pokemonn.png"
              ></video>
            </LazyLoad>
          </div>
        </div>
      </section>
    </>
  );
}
