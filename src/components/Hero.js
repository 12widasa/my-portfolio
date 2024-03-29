import React from "react";

import { Link } from "react-scroll";

// import myimage
import myimage from "../assets/img/about1.jpg";

const Hero = () => {
    return (
        <section
            id="home"
            className="lg:h-[85vh] flex
        items-center bg-primary lg:bg-cover lg:bg-center
        lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
        >
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full pt-8">
                    {/* left side */}
                    <div
                        className="flex-1 flex flex-col 
                    items-center lg:items-start"
                    >
                        <p
                            className="text-lg text-accent 
                        mb-[22px]"
                        >
                            Hey, I'm Royz 👋
                        </p>
                        <h1
                            className="text-4xl leading-[44px]
                        md:text-5xl md:leading-tight lg:text-7xl
                        lg:leading-[1.2] font-bold md:tracking-[-2px]"
                        >
                            I Design & Build <br /> Web Interfaces
                        </h1>
                        <p
                            className="pt-4 pb-8 md:pt-6 md:pb-12
                        max-2-[480px] text-lg text-center
                        lg:text-left"
                        >
                            Membuat design dan belajar tentang web development adalah hal yang menyenangkan bagi saya.
                        </p>
                        <Link
                            to="contact"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-15}
                            className="btn btn-md bg-accent hover:bg-secondary-hover transition-all cursor-pointer"
                        >
                            Contact Me
                        </Link>
                        {/* <a
                            href="https://api.whatsapp.com/send/?phone=6281326696640&text&type=phone_number&app_absent=0"
                            className="btn btn-md bg-accent-hover md-btn-lg transition-all"
                        >
                            Contact Me
                        </a> */}
                    </div>
                    {/* right side */}
                    <div
                        className="hidden lg:flex flex-1 
                justify-end items-end h-full"
                    >
                        <img src={myimage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
