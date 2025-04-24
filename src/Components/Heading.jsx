import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Heading = ({ headingText }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div ref={ref} className="flex items-center justify-center mt-24 mb-20">
            {/* Left Lines */}
            <div className="flex-grow flex flex-col gap-2">
                <motion.div
                    className="h-[0.45rem] bg-orange-400 w-[90%] rounded"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>
                <motion.div
                    className="h-[0.45rem] bg-[#3D3F86] w-[70%] rounded self-end"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                ></motion.div>
            </div>

            {/* Heading Text */}
            <h1 className="text-5xl text-black px-12 whitespace-nowrap" style={{ fontFamily: "Georgia Regular" }}>
                {headingText}
            </h1>

            {/* Right Lines */}
            <div className="flex-grow flex flex-col gap-2">
                <motion.div
                    className="h-[0.45rem] bg-orange-400 w-[90%] rounded self-end"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>
                <motion.div
                    className="h-[0.45rem] bg-[#3D3F86] w-[70%] rounded"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                ></motion.div>
            </div>
        </div>
    );
};

export default Heading;
