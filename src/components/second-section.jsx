import { Fragment, useEffect } from "react";
import { FiCode, FiMonitor, FiLink, FiEdit, FiZap } from "react-icons/fi";
import { TfiLayersAlt } from "react-icons/tfi";
import AOS from "aos";
import "aos/dist/aos.css";


export default function SecondSection(){
    useEffect(() => {
            AOS.init({});
        }, []);

    return(
       <Fragment>
            <section className="text-white px-28 pt-16 sm:p-5">
                <h1 className="font-handjet font-bold text-4xl pb-14 sm:text-3xl sm:text-center">
                    LET ME SHOW YOU HOW I CAN HELP
                </h1>

                <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 xs:grid-cols-1">
                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-duration="2000">
                        <span className="text-2xl"><FiCode /></span>
                        <h1 className="text-slate-300 text-xl font-inter antialiased md:text-lg">Frontend Development</h1>
                        <p className="text-slate-400 xl:text-sm md:text-xs">I create visually stunning and highly functional websites tailored to your needs. Whether it’s a portfolio, blog, business site, or e-commerce platform, I ensure that every element is crafted with precision. Using modern frameworks like React, I build scalable and maintainable applications that offer seamless user experiences.</p>
                    </div>

                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                        <span className="text-2xl"><FiMonitor /></span>
                        <h1 className="text-slate-300 text-xl font-inter antialiased md:text-lg">Responsive Design</h1>
                        <p className="text-slate-400 xl:text-sm md:text-xs">Your website will look flawless on any device, from desktops and tablets to smartphones. I specialize in building fluid, mobile-friendly layouts that automatically adjust to different screen sizes, resolutions, and orientations. With a focus on accessibility and usability, I ensure that every user, regardless of their device, gets an intuitive and engaging experience.</p>
                    </div>

                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                        <span className="text-2xl"><TfiLayersAlt /></span>
                        <h1 className="text-slate-300 text-xl font-inter antialiased md:text-lg">UI/UX Implementation</h1>
                        <p className="text-slate-400 xl:text-sm md:text-xs">A great website is more than just good looks—it needs to feel intuitive and effortless to navigate. I translate ideas and wireframes into user-friendly, pixel-perfect interfaces that enhance user engagement and satisfaction.I create experiences that not only captivate but also guide users seamlessly through your platform.</p>
                    </div>

                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-duration="2000">
                        <span className="text-2xl"><FiLink /></span>
                        <h1 className="text-slate-300 text-xl font-inter antialiased md:text-lg">SEO Optimization</h1>
                        <p className="text-slate-400 xl:text-sm md:text-xs">A beautiful website is useless if no one can find it. I help your site rank higher on search engines with optimized code, fast-loading pages, proper metadata, and keyword-rich content. By implementing structured data, clean URL structures, and responsive design best practices, I ensure your website gets indexed properly and reaches the right audience.</p>
                    </div>

                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                        <span className="text-2xl"><FiEdit /></span>
                        <h1 className="text-slate-300 text-xl font-inter antialiased md:text-lg">Interactive Web Elements</h1>
                        <p className="text-slate-400 xl:text-sm md:text-xs">Engagement is key to a memorable user experience. I integrate dynamic elements like animations, sliders, carousels, pop-ups, interactive buttons, and smooth scrolling effects to make your website feel alive. Whether it’s hover effects, form validations, or real-time updates, I ensure that every interaction is seamless and responsive.</p>
                    </div>

                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                        <span className="text-2xl"><FiZap /></span>
                        <h1 className="text-slate-300 text-xl font-inter antialiased md:text-lg">Performance Optimization</h1>
                        <p className="text-slate-400 xl:text-sm md:text-xs">Speed matters! I optimize your website’s performance by reducing loading times, improving caching strategies, and minimizing unnecessary scripts. By compressing images, implementing lazy loading, reducing render-blocking resources, and optimizing assets, I enhance the overall speed and efficiency of your site. </p>
                    </div>
                </div>
            </section>
            
       </Fragment>
    )
}