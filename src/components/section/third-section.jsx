import { Fragment } from "react";
import { FaCss3Alt, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";


export default function ThirdSection(){
    return(
       <Fragment>
            <section className="relative w-full py-12 sm:py-7 flex overflow-x-hidden group group-hover:[animation-play-state:paused]" >
                <div className="bg-gradient-to-r from-[rgb(11,11,11)] via-[rgba(12,12,12,0.9)] absolute left-0 top-9 bottom-0 w-20 z-10 sm:top-0"></div>

                <div className="animation-container flex w-full">
                    <div className="flex items-center justify-around text-6xl text-white mt-8 min-w-full animate-slider lg:text-5xl sm:text-3xl   sm:mt-0 group">
                        <a className="hover:scale-110 transition brightness-50 hover:brightness-200" href="https://www.w3schools.com/html/" target="_blank"><FaHtml5 /></a>
                        <a className="hover:scale-110 transition brightness-50 hover:brightness-200" href="https://www.w3schools.com/css/default.asp" target="_blank"><FaCss3Alt /></a>
                        <a className="hover:scale-110 transition brightness-50 hover:brightness-200" href="https://devdocs.io/javascript/" target="_blank"><FaSquareJs /></a>
                        <a className="hover:scale-110 transition brightness-50 hover:brightness-200" href="https://react.dev/" target="_blank"><FaReact /></a>
                        <a className="hover:scale-110 transition brightness-50 hover:brightness-200" href="https://getbootstrap.com/" target="_blank"><FaBootstrap /></a>
                        <a className="hover:scale-110 transition brightness-50 hover:brightness-200" href="https://tailwindcss.com/" target="_blank"><RiTailwindCssFill /></a>
                
                    </div>

                    <div className="flex items-center justify-around text-6xl text-white mt-8 min-w-full animate-slider lg:text-5xl sm:text-3xl  sm:mt-0 group">
                        <a className="hover:scale-110 transition brightness-50 hover:brightness-200" href="https://www.w3schools.com/html/" target="_blank"><FaHtml5 /></a>
                        <a className="hover:scale-110 transition brightness-50 hover:brightness-200" href="https://www.w3schools.com/css/default.asp" target="_blank"><FaCss3Alt /></a>
                        <a className="hover:scale-110 transition brightness-50 hover:brightness-200" href="https://devdocs.io/javascript/" target="_blank"><FaSquareJs /></a>
                        <a className="hover:scale-110 transition brightness-50 hover:brightness-200" href="https://react.dev/" target="_blank"><FaReact /></a>
                        <a className="hover:scale-110 transition brightness-50 hover:brightness-200" href="https://getbootstrap.com/" target="_blank"><FaBootstrap /></a>
                        <a className="hover:scale-110 transition brightness-50 hover:brightness-200" href="https://tailwindcss.com/" target="_blank"><RiTailwindCssFill /></a>
                    </div>
                </div>

                <div className="bg-gradient-to-l from-[rgb(11,11,11)] via-[rgba(12,12,12,0.9)] absolute right-0 top-9 bottom-0 w-20 z-10 sm:top-0"></div>
            </section>

            <div className="flex justify-center">
                <img src="./images/bg.svg" alt="" />
            </div>

       </Fragment>
       
    )
}