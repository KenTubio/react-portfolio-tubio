import { FaXTwitter } from "react-icons/fa6";
import React, { useState, useRef } from "react";

function Certificates() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX;
    const walk = (x - startX) * 1;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="text-white px-28 sm:p-7 mt-28 min-w-full">
      <h1 className="font-handjet font-bold text-5xl pb-20 sm:text-3xl sm:text-center tracking-widest">
        CERTIFICATIONS & PARTICIPATIONS.
      </h1>

      <main
        ref={sliderRef}
        className="w-full flex gap-7 overflow-x-scroll items-center"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
      >
        <div className="bg-gradient-to-b from-[#716d6d] to-[#0f0f0f] rounded-3xl sm:w-72">
          <figure className="w-fit relative">
            <img
              className="w-96 object-cover h-40 object-top rounded-tl-3xl rounded-tr-3xl"
              src="/images/reactjs.png"
              alt=""
            />
            <img
              className="w-24 sm:w-16 absolute sm:-bottom-9 -bottom-12 left-7"
              src="/images/link.png"
              alt=""
            />
            <a
              className="absolute bottom-4 bg-black p-3 text-xl rounded-full right-4 hover:scale-105 transition hover:bg-slate-500"
              href="https://x.com/LinkedIn"
              target="_blank"
            >
              <FaXTwitter />
            </a>
          </figure>

          <figcaption className="w-96 h-96 relative px-8 sm:w-72">
            <p className="font-inter text-4xl sm:text-3xl text-white antialiased tracking-wide leading-tight font-bold pt-14">
              Linkedin.
            </p>

            <p className="font-inter sm:text-sm antialiased text-slate-400 mt-5">
              I finished a structured ReactJS course that helped me gain
              confidence in frontend development.
            </p>

            <button
              className="bg-green-900 absolute bottom-10 left-7 px-10 py-3 rounded-full border-2 border-slate-800 font-handjet text-xl tracking-widest font-bold hover:scale-105 transition
                        "
            >
              <a href="/images/reactjs.png" target="_blank">
                View Cert.
              </a>
            </button>
          </figcaption>
        </div>

        <div className="bg-gradient-to-b from-[#716d6d] to-[#0f0f0f] rounded-3xl sm:w-72">
          <figure className="w-fit relative">
            <img
              className="w-96 object-cover h-40 object-top rounded-tl-3xl rounded-tr-3xl"
              src="/images/js-cert.png"
              alt=""
            />
            <img
              className="w-24 sm:w-16 absolute sm:-bottom-9 -bottom-12 left-7 rounded-md"
              src="/images/sim.jpg"
              alt=""
            />
            <a
              className="absolute bottom-4 bg-black p-3 text-xl rounded-full right-4 hover:scale-105 transition hover:bg-slate-500"
              href="https://x.com/simplilearn"
              target="_blank"
            >
              <FaXTwitter />
            </a>
          </figure>

          <figcaption className="w-96 h-96 relative px-8 sm:w-72">
            <p className="font-inter text-4xl sm:text-3xl text-white antialiased tracking-wide leading-tight font-bold pt-14">
              Simplilearn.
            </p>

            <p className="font-inter sm:text-sm antialiased text-slate-400 mt-5">
              Completed a structured JavaScript course that built confidence in
              web development.
            </p>

            <button
              className="bg-green-900 absolute bottom-10 left-7 px-10 py-3 rounded-full border-2 border-slate-800 font-handjet text-xl tracking-widest font-bold hover:scale-105 transition
                        "
            >
              <a href="/images/js-cert.png" target="_blank">
                View Cert.
              </a>
            </button>
          </figcaption>
        </div>

        <div className="bg-gradient-to-b from-[#716d6d] to-[#0f0f0f] rounded-3xl sm:w-72">
          <figure className="w-fit relative">
            <img
              className="w-96 object-cover h-40 object-top rounded-tl-3xl rounded-tr-3xl"
              src="/images/tailwind-2.png"
              alt=""
            />
            <img
              className="w-24 sm:w-16 absolute sm:-bottom-9 -bottom-12 left-7"
              src="/images/link.png"
              alt=""
            />
            <a
              className="absolute bottom-4 bg-black p-3 text-xl rounded-full right-4 hover:scale-105 transition hover:bg-slate-500"
              href="https://x.com/LinkedIn"
              target="_blank"
            >
              <FaXTwitter />
            </a>
          </figure>

          <figcaption className="w-96 h-96 relative px-8 sm:w-72">
            <p className="font-inter text-4xl sm:text-3xl text-white antialiased tracking-wide leading-tight font-bold pt-14">
              Linkedin.
            </p>

            <p className="font-inter sm:text-sm antialiased text-slate-400 mt-5">
                Hands-on Tailwind experience enhanced styling skills effectively.
            </p>

            <button
              className="bg-green-900 absolute bottom-10 left-7 px-10 py-3 rounded-full border-2 border-slate-800 font-handjet text-xl tracking-widest font-bold hover:scale-105 transition
    "
            >
              <a href="/images/tailwind-2.png" target="_blank">
                View Cert.
              </a>
            </button>
          </figcaption>
        </div>

        <div className="bg-gradient-to-b from-[#716d6d] to-[#0f0f0f] rounded-3xl sm:w-72">
          <figure className="w-fit relative">
            <img
              className="w-96 object-cover h-40 object-top rounded-tl-3xl rounded-tr-3xl"
              src="/images/responsive-cert.png"
              alt=""
            />
            <img
              className="w-24 sm:w-16 absolute sm:-bottom-9 -bottom-12 left-7 rounded-md object-cover"
              src="/images/fcc1.jpg"
              alt=""
            />
            <a
              className="absolute bottom-4 bg-black p-3 text-xl rounded-full right-4 hover:scale-105 transition hover:bg-slate-500"
              href="https://x.com/freeCodeCamp"
              target="_blank"
            >
              <FaXTwitter />
            </a>
          </figure>

          <figcaption className="w-96 h-96 relative px-8 sm:w-72">
            <p className="font-inter text-4xl sm:text-3xl text-white antialiased tracking-wide leading-tight font-bold pt-14">
              freeCodeCamp.
            </p>

            <p className="font-inter sm:text-sm antialiased text-slate-400 mt-5">
                Practical layout techniques improved responsive design proficiency.
            </p>

            <button
              className="bg-green-900 absolute bottom-10 left-7 px-10 py-3 rounded-full border-2 border-slate-800 font-handjet text-xl tracking-widest font-bold hover:scale-105 transition
    "
            >
              <a href="/images/responsive-cert.png" target="_blank">
                View Cert.
              </a>
            </button>
          </figcaption>
        </div>


        <div className="bg-gradient-to-b from-[#716d6d] to-[#0f0f0f] rounded-3xl sm:w-72">
          <figure className="w-fit relative">
            <img
              className="w-96 object-cover h-40 object-top rounded-tl-3xl rounded-tr-3xl"
              src="/images/css.png"
              alt=""
            />
            <img
              className="w-24 sm:w-16 absolute sm:-bottom-9 -bottom-12 left-7"
              src="/images/link.png"
              alt=""
            />
            <a
              className="absolute bottom-4 bg-black p-3 text-xl rounded-full right-4 hover:scale-105 transition hover:bg-slate-500"
              href="https://x.com/LinkedIn"
              target="_blank"
            >
              <FaXTwitter />
            </a>
          </figure>

          <figcaption className="w-96 h-96 relative px-8 sm:w-72">
            <p className="font-inter text-4xl sm:text-3xl text-white antialiased tracking-wide leading-tight font-bold pt-14">
              Linkedin.
            </p>

            <p className="font-inter sm:text-sm antialiased text-slate-400 mt-5">
                Built a solid foundation in CSS, improving layout control and visual styling techniques.
            </p>

            <button
              className="bg-green-900 absolute bottom-10 left-7 px-10 py-3 rounded-full border-2 border-slate-800 font-handjet text-xl tracking-widest font-bold hover:scale-105 transition
    "
            >
              <a href="/images/css.png" target="_blank">
                View Cert.
              </a>
            </button>
          </figcaption>
        </div>


        <div className="bg-gradient-to-b from-[#716d6d] to-[#0f0f0f] rounded-3xl sm:w-72">
          <figure className="w-fit relative">
            <img
              className="w-96 object-cover h-40 object-top rounded-tl-3xl rounded-tr-3xl"
              src="/images/html-cert.png"
              alt=""
            />
            <img
              className="w-24 sm:w-16 absolute sm:-bottom-9 -bottom-12 left-7 rounded-md"
              src="/images/sim.jpg"
              alt=""
            />
            <a
              className="absolute bottom-4 bg-black p-3 text-xl rounded-full right-4 hover:scale-105 transition hover:bg-slate-500"
              href="https://x.com/simplilearn"
              target="_blank"
            >
              <FaXTwitter />
            </a>
          </figure>

          <figcaption className="w-96 h-96 relative px-8 sm:w-72">
            <p className="font-inter text-4xl sm:text-3xl text-white antialiased tracking-wide leading-tight font-bold pt-14">
              Simplilearn.
            </p>

            <p className="font-inter sm:text-sm antialiased text-slate-400 mt-5">
            Gained practical skills in structuring content and building accessible web pages with HTML.
            </p>

            <button
              className="bg-green-900 absolute bottom-10 left-7 px-10 py-3 rounded-full border-2 border-slate-800 font-handjet text-xl tracking-widest font-bold hover:scale-105 transition
                        "
            >
              <a href="/images/html-cert.png" target="_blank">
                View Cert.
              </a>
            </button>
          </figcaption>
        </div>

        <div className="bg-gradient-to-b from-[#716d6d] to-[#0f0f0f] rounded-3xl sm:w-72">
          <figure className="w-fit relative">
            <img
              className="w-96 object-cover h-40 object-top rounded-tl-3xl rounded-tr-3xl"
              src="/images/devfest.png"
              alt=""
            />
            <img
              className="w-24 h-24 object-cover sm:w-16 sm:h-16 absolute sm:-bottom-9 -bottom-12 left-7 rounded-md border-2 border-slate-700"
              src="/images/gdg.png"
              alt=""
            />
            <a
              className="absolute bottom-4 bg-black p-3 text-xl rounded-full right-4 hover:scale-105 transition hover:bg-slate-500"
              href="https://x.com/gdgzambo"
              target="_blank"
            >
              <FaXTwitter />
            </a>
          </figure>

          <figcaption className="w-96 h-96 relative px-8 sm:w-72">
            <p className="font-inter text-4xl sm:text-3xl text-white antialiased tracking-wide leading-tight font-bold pt-14">
              GDG Zamboanga
            </p>

            <p className="font-inter sm:text-sm antialiased text-slate-400 mt-5">
            Attended DevFest Zamboanga and explored real-world tech practices with local developers.
            </p>

            <button
              className="bg-green-900 absolute bottom-10 left-7 px-10 py-3 rounded-full border-2 border-slate-800 font-handjet text-xl tracking-widest font-bold hover:scale-105 transition
                        "
            >
              <a href="/images/devfest.png" target="_blank">
                View Cert.
              </a>
            </button>
          </figcaption>
        </div>


        <button className="text-3xl hover:underline hover:underline-offset-4">
            <a href="https://drive.google.com/drive/u/0/folders/1Rj2c4oHT7B9ZMxyJ83yMcV575WSEcD1J" target="_blank">
                More...
            </a>
        </button>
      </main>

    </section>
  );
}

export default Certificates;
