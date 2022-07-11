/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

// import components
import Logo from "../assets/img/logo.png";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Sosmeds from "../components/Sosmed";

const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });
    return (
        <header
            className={`${
                bg ? "bg-tertiary h-20" : "h-24"
            } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
        >
            <div className="container mx-auto h-full flex items-center justify-between">
                {/* logo */}
                <a href="#">
                    <img src={Logo} alt="" />
                </a>
                {/* Nav */}
                <div className="hidden lg:block">
                    <Nav />
                </div>
                {/* Sosmed */}
                <div className="hidden lg:block">
                    <Sosmeds />
                </div>
                {/* Navmobile */}
                <div className="lg:hidden">
                    <NavMobile />
                </div>
            </div>
        </header>
    );
};

export default Header;
