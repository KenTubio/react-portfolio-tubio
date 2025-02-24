import { Fragment, useEffect } from "react";
import { FiCode, FiTablet, FiSettings, FiEdit, FiZap } from "react-icons/fi";
import { TfiLayersAlt } from "react-icons/tfi";
import AOS from "aos";
import "aos/dist/aos.css";


export default function SecondSection(){
    useEffect(() => {
            AOS.init({});
        }, []);

    return(
       <Fragment>
            <section id="second-section" className="text-white px-28 sm:p-11 mt-10">

                <h1 className="font-handjet font-bold text-4xl pb-20 sm:text-3xl sm:text-center tracking-wide relative">
                    LET ME SHOW YOU HOW I CAN HELP.
                    <div className="w-24 h-24 absolute border-t-2 border-l-2 -top-8 -left-8  border-t-[#FFFFFF1A] border-l-[#FFFFFF1A]"></div>
                    <div className="w-24 h-24 absolute border-t-2 border-r-2 -top-8 -right-8 border-t-[#FFFFFF1A] border-r-[#FFFFFF1A]"></div>
                </h1>

                <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 xs:grid-cols-1 relative">
                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-duration="1500">
                        <span className="text-2xl"><FiCode /></span>
                        <h1 className="text-slate-300 text-xl font-inter antialiased md:text-lg font-bold">Frontend Development</h1>
                        <p className="text-slate-400 xl:text-sm md:text-xs">I create visually stunning and highly functional websites tailored to your needs. Whether it’s a portfolio, blog, business site, or e-commerce platform, I ensure that every element is crafted with precision. Using modern frameworks like React, I build scalable and maintainable applications that offer seamless user experiences.</p>
                    </div>

                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                        <span className="text-2xl w-fit animate-rotate"><FiTablet /></span>
                        <h1 className="text-slate-300 text-xl font-inter antialiased md:text-lg font-bold">Responsive Design</h1>
                        <p className="text-slate-400 xl:text-sm md:text-xs">Your website will look flawless on any device, from desktops and tablets to smartphones. I specialize in building fluid, mobile-friendly layouts that automatically adjust to different screen sizes, resolutions, and orientations. With a focus on accessibility and usability, I ensure that every user, regardless of their device, gets an intuitive and engaging experience.</p>
                    </div>

                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900">
                        <span className="text-2xl animate-bounce w-fit"><TfiLayersAlt /></span>
                        <h1 className="text-slate-300 text-xl font-inter antialiased md:text-lg font-bold">UI/UX Implementation</h1>
                        <p className="text-slate-400 xl:text-sm md:text-xs">A great website is more than just good looks—it needs to feel intuitive and effortless to navigate. I translate ideas and wireframes into user-friendly, pixel-perfect interfaces that enhance user engagement and satisfaction.I create experiences that not only captivate but also guide users seamlessly through your platform.</p>
                    </div>

                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-duration="1500">
                        <span className="text-2xl animate-spin w-fit"><FiSettings /></span>
                        <h1 className="text-slate-300 text-xl font-inter antialiased md:text-lg font-bold">SEO Optimization</h1>
                        <p className="text-slate-400 xl:text-sm md:text-xs">A beautiful website is useless if no one can find it. I help your site rank higher on search engines with optimized code, proper metadata, and keyword-rich content. By implementing structured data, clean URL structures, and responsive design best practices, I ensure your website gets indexed properly and reaches the right audience.</p>
                    </div>

                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                        <span className="text-base animate-ping w-fit"><FiEdit /></span>
                        <h1 className="text-slate-300 text-xl font-inter antialiased md:text-lg font-bold">Interactive Web Elements</h1>
                        <p className="text-slate-400 xl:text-sm md:text-xs">Engagement is key to a memorable user experience. I integrate dynamic elements like animations, sliders, carousels, pop-ups, interactive buttons, and smooth scrolling effects to make your website feel alive. Whether it’s hover effects, form validations, or real-time updates, I ensure that every interaction is seamless and responsive.</p>
                    </div>

                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900">
                        <span className="text-2xl"><FiZap /></span>
                        <h1 className="text-slate-300 text-xl font-inter antialiased md:text-lg font-bold">Performance Optimization</h1>
                        <p className="text-slate-400 xl:text-sm md:text-xs">Speed matters! I optimize your website’s performance by reducing loading times, improving caching strategies, and minimizing unnecessary scripts. By compressing images, implementing lazy loading, reducing render-blocking resources, and optimizing assets, I enhance the overall speed and efficiency of your site. </p>
                    </div>


                    <div className="w-24 h-24 absolute border-l-2 border-b-2 -bottom-8 -left-8 border-l-[#FFFFFF1A] border-b-[#FFFFFF1A]"></div>
                    <div className="w-24 h-24 absolute border-r-2 border-b-2 -bottom-8 -right-8 border-r-[#FFFFFF1A] border-b-[#FFFFFF1A]"></div>
                </div>
                
            </section>
            
       </Fragment>
    )
}