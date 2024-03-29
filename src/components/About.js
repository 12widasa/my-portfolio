import React from "react";

import { Link } from "react-scroll";

// import img
import Image from "../assets/img/about5.png";

const About = () => {
    return (
        <section className="section bg-secondary" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-24">
                    <img className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl" src={Image} alt="" />
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                                About Me
                            </h2>
                            {/* <p className="mb-4 text-accent">Polines Student</p> */}
                            <hr className="mb-8 opacity-5" />
                            <p className="mb-8">
                                Saya adalah mahasiswa teknik informatika dari Polines tingkat 2, yang mampu disiplin dan
                                bekerja dengan team. Mempunyai Kemampuan basic dalam bidang Web dan Android. Memiliki
                                ketertarikan dan pengalaman dalam dunia design dan web front end.
                                <br />
                                <br />
                                Berikut adalah beberapa keterampilan yang pernah saya pelajari
                            </p>
                        </div>
                        <Link
                            to="skills"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-300}
                            className="btn btn-md bg-accent hover:bg-secondary-hover transition-all cursor-pointer"
                        >
                            Experience
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
