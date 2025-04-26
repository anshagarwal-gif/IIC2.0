import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Heading = ({ headingText }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div ref={ref} className="flex items-center justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 mb-10 sm:mb-12 md:mb-16 lg:mb-20 px-4">
            {/* Left Lines */}
            <div className="flex-grow max-w-[25%] sm:max-w-[30%] md:max-w-none flex flex-col gap-1 sm:gap-2">
                <motion.div
                    className="h-[0.25rem] sm:h-[0.35rem] md:h-[0.45rem] bg-orange-400 w-[90%] rounded"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>
                <motion.div
                    className="h-[0.25rem] sm:h-[0.35rem] md:h-[0.45rem] bg-[#3D3F86] w-[70%] rounded self-end"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                ></motion.div>
            </div>

            {/* Heading Text */}
            <h1 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black px-2 sm:px-4 md:px-8 lg:px-12 whitespace-normal sm:whitespace-nowrap" 
                style={{ fontFamily: "Georgia Regular" }}
            >
                {headingText}
            </h1>

            {/* Right Lines */}
            <div className="flex-grow max-w-[25%] sm:max-w-[30%] md:max-w-none flex flex-col gap-1 sm:gap-2">
                <motion.div
                    className="h-[0.25rem] sm:h-[0.35rem] md:h-[0.45rem] bg-orange-400 w-[90%] rounded self-end"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>
                <motion.div
                    className="h-[0.25rem] sm:h-[0.35rem] md:h-[0.45rem] bg-[#3D3F86] w-[70%] rounded"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                ></motion.div>
            </div>
        </div>
    );
};

export default Heading;