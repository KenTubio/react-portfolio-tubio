import { Fragment } from "react";
import { FaCss3Alt, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";


export default function ThirdSection(){
    return(
       <Fragment>
            <section className="relative w-full py-12 sm:py-7 flex overflow-x-hidden">
                <div className="bg-gradient-to-r from-[rgb(11,11,11)] via-[rgba(12,12,12,0.9)] absolute left-0 top-9 bottom-0 w-20 z-10 sm:top-0"></div>

                <div className="flex items-center justify-around text-6xl text-white mt-8 brightness-50 min-w-full animate-slider lg:text-5xl sm:text-3xl sm:mt-0">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaSquareJs />
                    <FaReact />
                    <FaBootstrap />
                    <RiTailwindCssFill />
                </div>

                <div className="flex items-center justify-around text-6xl text-white mt-8 brightness-50 min-w-full animate-slider lg:text-5xl sm:text-3xl sm:mt-0">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaSquareJs />
                    <FaReact />
                    <FaBootstrap />
                    <RiTailwindCssFill />
                </div>
                <div className="bg-gradient-to-l from-[rgb(11,11,11)] via-[rgba(12,12,12,0.9)] absolute right-0 top-9 bottom-0 w-20 z-10 sm:top-0"></div>
            </section>

            <div className="flex justify-center">
                <img src="./images/bg.svg" alt="" />
            </div>

       </Fragment>
       
    )
}