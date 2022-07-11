import React from "react";

//import Sosmed data
import { Sosmed } from "../data";

const Sosmeds = () => {
    return (
        <ul className="flex space-x-6">
            {Sosmed.map((item, index) => {
                return (
                    <li
                        className="flex justify-center
                items-center text-accent"
                        key={index}
                    >
                        <a className="text-base" href={item.href}>
                            {item.icon}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default Sosmeds;
