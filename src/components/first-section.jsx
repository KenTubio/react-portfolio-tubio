import { Fragment, useEffect, useState } from "react"
import { FaRegEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosCloseCircleOutline } from "react-icons/io";


export default function FirstSection(){

    useEffect(() => {
        AOS.init({});
    }, []);


    const [isPopUpVisible, setIsPopupVisible] = useState(false)

    function ContactPopUp (){
       setIsPopupVisible(true)
    }

    function ClosePopUp (){
        setIsPopupVisible(false)
     }
 

    return (
        <Fragment>
            <header className=" flex justify-between items-center fixed left-0 right-0 top-0 px-16 sm:px-4 pt-5">
                <img className="w-28" src="/new-logoni-bro.png" alt="" />

                <button className="text-white text-3xl hover:scale-110 transition" onClick={ContactPopUp}>
                    <FaRegEnvelope/>
                </button>
            </header>

            <section className=" h-screen flex flex-col justify-end gap-6 p-28 sm:p-3 md:items-center md:text-center md:justify-center">
                <div className="flex gap-2 font-handjet text-6xl lg:text-4xl font-bold tracking-widest text-slate-400">
                    <h1>Hi, I'm</h1>
                    <div>
                        <span className="animate-bounce [animation-delay:0ms] inline-block">K</span>
                        <span className="animate-bounce [animation-delay:100ms] inline-block">E</span>
                        <span className="animate-bounce [animation-delay:200ms] inline-block">N</span>
                        <span className="animate-bounce [animation-delay:300ms] inline-block">N</span>
                        <span className="animate-bounce [animation-delay:400ms] inline-block">E</span>
                        <span className="animate-bounce [animation-delay:500ms] inline-block">T</span>
                        <span className="animate-bounce [animation-delay:600ms] inline-block">H.</span>
                       
                    </div>
                </div>

                <p className="font-inter text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-white antialiased tracking-wide w-4/5 lg:w-full leading-tight" data-aos="fade-right" data-aos-duration="2000">
                    I'm a front-end web
                    developer and web designer.
                </p>

                <p className="text-slate-600 text-2xl lg:text-xl sm:text-sm md:text-base font-inter antialiased w-9/12 lg:w-full" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000">
                    I’m a front-end web developer who enjoys creating user-friendly web applications. I focus on building responsive designs and simple, functional interfaces that enhance the user experience.
                </p>


                {/* DITO YUNG POPUP */}
                {isPopUpVisible && (
                    <div className="fixed bg-[#00000080] backdrop-blur-sm  inset-0 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center contact" >
                    <button className="absolute top-5 right-5 text-3xl close" onClick={ClosePopUp}>
                        <IoIosCloseCircleOutline />
                    </button>
                    TESTING
                </div>
                )}
            </section>
        </Fragment>
    )
} 