import { FaFacebookSquare, FaFacebookMessenger, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function FooterSection(){
     useEffect(() => {
        AOS.init({});
      }, []);

    return (
        <>
            <footer className="text-white px-28 sm:p-7 mt-28">

                <hr className="border border-[#FFFFFF1A] w-full" />

                <figure className="mt-16 flex justify-center items-center gap-10 text-3xl">
                    <a className="hover:scale-125 transition hover:cursor-pointer
                    " href="https://web.facebook.com/kenneth.tubio" target="_blank"><FaFacebookSquare /></a>
                    <a className="hover:scale-125 transition hover:cursor-pointer
                    " href="https://x.com/siBrolngto" target="_blank"><FaXTwitter /></a>
                    <a className="hover:scale-125 transition hover:cursor-pointer
                    " href="https://www.messenger.com/t/100004375868644" target="_blank"><FaFacebookMessenger /></a>
                    <a className="hover:scale-125 transition hover:cursor-pointer
                    " href="https://github.com/KenTubio" target="_blank"><FaGithubSquare /></a>
                    <a className="hover:scale-125 transition hover:cursor-pointer
                    " href="https://www.linkedin.com/in/kenneth-tubio-814b35359/" target="_blank"><FaLinkedin /></a>
                </figure>

                <div className="flex justify-center items-center mt-10">
                    <p className="w-11/12 sm:w-full text-center font-inter text-slate-400 text-base lg:text-xs sm:text-[0.55rem]">Thank you for taking the time to visit my portfolio! It truly means a lot. I’ve put a lot of effort into creating and refining my work, and I hope you found something here that speaks to you. If you have any thoughts, ideas, or just want to say hello, I’d love to hear from you! Let’s connect and create something great together.</p>
                </div>

                <figure className="flex justify-center mt-5">
                    <img className="w-60 lg:w-44" src="./images/new-logoni-bro.png" alt="" />
                </figure>


                <h1 className="text-center font-inter antialiased text-slate-300 tracking-wider lg:text-sm">Tubio | Kenith.ZRO</h1>

                <h1 className="text-center text-[12rem] lg:text-8xl lg:mt-10 font-bold font-handjet tracking-wider relative" data-aos="zoom-out" data-aos-duration="1500">
                    THANK YOU
                </h1>
            </footer>

        </>
    )

}