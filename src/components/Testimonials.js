import React from "react";

//import components
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="section
    bg-secondary"
        >
            <div className="container mx-auto">
                <div
                    className="flex flex-col items-center
                text-center"
                >
                    <h2
                        className="section-title
                    before:content-testimonials relative
                    before:absolute before:opacity-40
                    before:-top-[2rem] 
                    before:-left-64 before:hidden
                    before:lg:block"
                    >
                        What Order People Say
                    </h2>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat non totam dignissimos omnis
                        molestiae, dicta dolorum voluptatem quam mollitia officiis sit incidunt dolores adipisci ut unde
                        tempore temporibus veniam eligendi.
                    </p>
                </div>
                <TestimonialSlider />
            </div>
        </section>
    );
};

export default Testimonials;
