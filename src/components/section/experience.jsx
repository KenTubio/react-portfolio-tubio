import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Experience() {
     useEffect(() => {
        AOS.init({});
      }, []);
    


  return (
    <section className="text-white px-28 sm:p-7 mt-28 w-full">
      <h1 className="font-handjet font-bold text-5xl pb-20 sm:text-3xl sm:text-center tracking-widest">
        EXPERIENCE.
      </h1>

      <main className="w-full flex lg:flex-col" data-aos="fade-up"
            data-aos-duration="1500">
        <figure className="w-1/2 lg:w-full flex justify-center items-center  bg-gradient-to-b from-[#252424] to-[#0f0f0f] h-96 md:h-60 rounded-3xl">
            <img className="object-cover rounded-full w-80 md:w-56 sm:w-40" src="/images/brono.png" alt="" />
        </figure>
        
        <figcaption className="w-1/2 p-7 lg:w-full">
          <h1 className="font-handjet font-bold text-6xl mb-5 md:text-4xl tracking-wide text-slate-200 w-full flex justify-between items-center">
            Chronologix.
          </h1>

          <p className="text-slate-400 text-sm md:text-xs xs:text-[0.55rem]">
          Chronoogix is a full-service IT company delivering end-to-end website solutions. Specialize in front-end and back-end development, database management, cloud integration, and ongoing support—empowering businesses with secure, scalable, and high-performing digital platforms tailored to their needs.
          </p>

          <ul className="font-inter tracking-widest text-base md:text-sm xs:text-xs leading-7 mt-5 list-disc px-8">
            <li>Front End Developer</li>
            <li>UI/UX Designer</li>
            <li>2023-2024</li>
          </ul>
        </figcaption>
      </main>
    </section>
  );
}

export default Experience;
