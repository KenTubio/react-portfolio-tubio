import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import { AiTwotoneHtml5 } from "react-icons/ai";
import { TbBrandTailwind } from "react-icons/tb";
import { FaJsSquare } from "react-icons/fa";
import { GoArrowLeft,  GoArrowRight} from "react-icons/go";
import { FaReact } from "react-icons/fa6";


export default function ForthSection() {

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <section className="text-white px-28 sm:p-7 mt-28">
        <h1 className="font-handjet font-bold text-5xl pb-20 sm:text-3xl sm:text-center tracking-widest">
          FRONT-END WEB CREATIONS.
        </h1>

        {/* first mini project */}
        <div className="grid grid-cols-2 items-start gap-10 antialiased gap-y-24  lg:grid-cols-1">
          <div
            className=" flex flex-col gap-7"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="relative font-handjet font-bold text-4xl md:text-2xl tracking-wide text-slate-300 w-full flex justify-between items-center">
              BLOG - BSIT TOUR 2025
              <a
                className="text-3xl md:text-2xl hover:scale-125 cursor-pointer transition hover:rotate-45"
                href="https://bsit-tour-2025.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoArrowUpRight />
              </a>
            </h1>

            <p className="font-inter tracking-widest text-base md:text-sm xs:text-xs leading-7 ">
              This blog highlights my frontend skills with a clean,
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

            <figure className="flex gap-5 text-4xl sm:text-2xl">
              <TbBrandTailwind />
              <FaReact />
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
                src="./videos/blog.mp4"
                poster="./images/blog.png"
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
              SUPHA - E Supermarket
              <a
                className="text-3xl md:text-2xl hover:scale-125 cursor-pointer transition hover:rotate-45 "
                href="https://kentubio.github.io/tubio_portfolio/dist/projects/ecommerce-sample.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoArrowUpRight />
              </a>
            </h1>

            <p className="font-inter tracking-widest text-base leading-7 md:text-sm xs:text-xs">
              SUPHA-E Supermarket is a frontend e-commerce site demonstrating
              JavaScript DOM skills with interactive browsing and cart updates.
            </p>

            <p className="text-slate-400 text-sm md:text-xs xs:text-[0.55rem]">
              I handled the entire project from design to development, focusing
              on dynamic UI interactions using Vanilla JavaScript. I implemented
              intuitive product browsing, event-driven functionality, and
              interactive styling with Tailwind CSS. This project served as my
              foundation in frontend development, allowing me to strengthen my
              JavaScript skills before moving on to React.
            </p>

            <figure className="flex gap-5 text-4xl sm:text-2xl">
              <AiTwotoneHtml5 />
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
                src="./videos/ecommerce.mp4"
                poster="./images/ecoms.png"
              ></video>
            </LazyLoad>
          </div>

          {/* third mini project */}

          <div
            className=" flex flex-col gap-7"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="relative font-handjet font-bold text-4xl tracking-wide text-slate-300 w-full flex justify-between items-center md:text-2xl">
              CryptoWatch
              <a
                className="text-3xl md:text-2xl hover:scale-125 cursor-pointer transition hover:rotate-45 "
                href="https://kentubio.github.io/tubio_portfolio/dist/projects/apiTraining(cryptowatch).html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoArrowUpRight />
              </a>
            </h1>

            <p className="font-inter tracking-widest text-base leading-7 md:text-sm xs:text-xs">
              CryptoWatch fetches real-time cryptocurrency data, showcasing my
              API integration skills with dynamic price updates, market cap, and
              key details in a user-friendly interface.
            </p>

            <p className="text-slate-400 text-sm md:text-xs xs:text-[0.55rem]">
              I built the entire project from scratch, focusing on API fetching,
              data handling, and dynamic content rendering with Vanilla
              JavaScript. I implemented real-time updates, error handling, and
              responsive design with Tailwind CSS. This project strengthened my
              understanding of working with APIs, improving my ability to fetch
              and display external data efficiently before moving on to more
              complex applications.
            </p>

            <figure className="flex gap-5 text-4xl sm:text-2xl">
              <AiTwotoneHtml5 />
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
                src="./videos/cryptowatch.mp4"
                poster="./images/cwatch.png"
              ></video>
            </LazyLoad>
          </div>
        </div>

        <center>
          <button
            className="mt-11 text-white text-3xl antialiased font-inter flex items-center hover:underline transition hover:underline-offset-8 hover:text-gray-400"

            onClick={()=>{
              window.open('/projects', '_blank')
            }}
          >
            <span className="transition animate-asideR">
              <GoArrowRight />
            </span>
            View More
            <span className="transition animate-asideL">
              <GoArrowLeft />
            </span>
          </button>
        </center>
      </section>
    </>
  );
}
