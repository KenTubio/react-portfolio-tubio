import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";

export default function ContactMe() {
  const [isPopUpVisible, setIsPopupVisible] = useState(false);

  function ContactPopUp() {
    setIsPopupVisible(true);
  }

  function ClosePopUp() {
    setIsPopupVisible(false);
  }

  return (
    <>
      <button
        className="text-white text-3xl sm:text-2xl hover:scale-110 transition"
        onClick={ContactPopUp}
      >
        <FaRegEnvelope />
      </button>

      {/* DITO YUNG POPUP */}
      {isPopUpVisible && (
        <div className="fixed bg-[#00000090] backdrop-blur-md  inset-0 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center contact h-3/4 md:w-full">
          <button
            className="absolute top-5 right-5 text-3xl close"
            onClick={ClosePopUp}
          >
            <IoIosCloseCircleOutline />
          </button>


            <form className="flex flex-col gap-2  w-full h-full justify-center items-center sm:p-4" onSubmit={(e) =>{
                e.preventDefault()
            }}>
                <div className="w-2/3 sm:w-full">
                    <h1 className="font-inter antialiased text-6xl lg:text-4xl font-bold tracking-widest">Contact Me</h1>
                    <p className="font-inter text-slate-400 w-3/4 sm:w-full tracking-wider mt-3 mb-8 lg:text-sm">Feel free to reach out for any opportunities or inquiries. I'd love to connect!</p>
                </div>

                
                <input className="bg-transparent p-3 w-2/3 sm:w-full border-b-white border-b-2  focus:outline-none focus:border-b-white" type="text" placeholder="Your name" required />

                <input className="bg-transparent p-3 w-2/3 sm:w-full border-b-white border-b-2  focus:outline-none focus:border-b-white" type="email" placeholder="Your email" required/>

                <textarea className="bg-transparent p-3 w-2/3 sm:w-full border-b-white border-b-2 h-28  focus:outline-none focus:border-b-white resize-none" name="" id="" placeholder="Your thoughts" required></textarea>

                <button  className="bg-white text-black w-2/3 sm:w-full py-2 mt-6 rounded-sm font-handjet font-bold text-2xl lg:text-lg tracking-wider hover:scale-105 transition">SUBMIT</button>
            </form>
        </div>
      )}
    </>
  );
}
