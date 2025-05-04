import { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";

export default function ContactMe() {
  const [isPopUpVisible, setIsPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function ContactPopUp() {
    setIsPopupVisible(true);
  }

  function ClosePopUp() {
    setIsPopupVisible(false);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);  

    emailjs
      .send(
        "service_uln58ya",
        "template_u0c995l", 
        formData,
        "7PXOMZ3OfPy7M8bk7"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully! Thank you contacting me!");
          setIsPopupVisible(false);
          setIsLoading(false); 

          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message, try again.");
          setIsLoading(false);  
        }
      );
  };

  return (
    <>
      <button
        className="text-white text-4xl sm:text-2xl hover:scale-110 transition relative"
        onClick={ContactPopUp}
      >
        <FaRegEnvelope />
        <div className="absolute w-3 h-3 bg-red-400 -top-1 -left-2 rounded-full animate-ping"></div>
      </button>

      {isPopUpVisible && (
        <div className="fixed bg-[#00000090] backdrop-blur-md text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center contact h-3/4 md:w-11/12 border-2 rounded-md border-slate-700">
          <button
            className="absolute top-5 right-5 text-3xl close transition hover:scale-110"
            onClick={ClosePopUp}
          >
            <IoIosCloseCircleOutline />
          </button>

          <form className="flex flex-col gap-5 w-full h-full justify-center items-center sm:p-4" onSubmit={handleSubmit}>
            <div className="w-2/3 sm:w-full">
              <h1 className="font-handjet antialiased text-6xl sm:text-5xl font-bold tracking-widest">Contact Me</h1>
              <p className="font-inter text-slate-400 w-3/4 sm:w-full tracking-wider mt-3 mb-8 text-sm sm:text-[.7rem]">
                Feel free to reach out for any opportunities or inquiries. I'd love to connect!
              </p>
            </div>

            <input
              className="bg-transparent p-3 w-2/3 sm:w-full border-b-white border-b-2 focus:outline-none focus:border-b-white"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              className="bg-transparent p-3 w-2/3 sm:w-full border-b-white border-b-2 focus:outline-none focus:border-b-white"
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              className="bg-transparent p-3 w-2/3 sm:w-full border-b-white border-b-2 h-28 focus:outline-none focus:border-b-white resize-none"
              name="message"
              placeholder="Your thoughts"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

      
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              <button className="bg-white text-black w-2/3 sm:w-full py-2 mt-6 rounded-sm font-handjet font-bold text-xl lg:text-lg tracking-wider hover:scale-105 transition">
                SUBMIT
              </button>
            )}
          </form>
        </div>
      )}
    </>
  );
}
