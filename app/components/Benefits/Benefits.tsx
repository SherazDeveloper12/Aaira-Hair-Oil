"use client"
import React from 'react'
import { motion, useScroll } from 'motion/react'
import HairGrowthIcon from '../CustomIcons/HairGrowth';
import { ChartNoAxesCombined, ShieldCheck, Sparkles, Sprout } from 'lucide-react';
export default function Benefits() {
    const ourBenefits = ["O", "u", "r", " ", "B", "e", "n", "e", "f", "i", "t", "s"];
    const scrollAnimation = {
        initial: { opacity: 0, y: 50 },

        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };
    return (
        <div id='benefits'>
            <div className="flex flex-wrap justify-center gap-2 lg:gap-4 pt-24 pb-2 ">
                {
                    ourBenefits.map((char, index) => (
                        <motion.h2
                            key={index}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-3xl font-bold text-center "
                        >
                            {char}
                        </motion.h2>
                    ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 px-4 lg:px-0 relative py-16">




                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="flex gap-2 items-center absolute top-45 left-25 font-semibold  text-xl text-center ">

                    <ShieldCheck strokeWidth={2} size={40} className="text-primary border rounded-full p-2" />
                    <motion.h1

                    >Protects Hair Fall and Breakage</motion.h1>

                </motion.div>
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    src="/flower.png" alt="Benefits Image" className="absolute top-35 left-95 w-14 h-60 rotate-270" />

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="flex gap-2 items-center absolute top-125 left-25 font-semibold text-xl text-center ">

                    <Sparkles strokeWidth={2} size={40} className="text-primary  border rounded-full p-2" />
                    <motion.h1
                        className=""
                    >Adds Shine & Softness</motion.h1>

                </motion.div>
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    src="/flower.png" alt="Benefits Image" className="absolute top-115 left-95 w-14 h-60 rotate-270" />

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="flex gap-2 items-center absolute top-85 right-25 font-semibold text-xl text-center ">


                    <motion.h1

                    >100% Natural & Safe</motion.h1>
                    <Sprout strokeWidth={2} size={40} className="text-primary border rounded-full p-2" />

                </motion.div>
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    src="/flower.png" alt="Benefits Image" className="absolute top-75 right-95 w-14 h-60 rotate-90" />


                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="flex gap-2 items-center absolute top-155 right-25 font-semibold text-xl text-center ">


                    <motion.h1

                    >Promotes Hair Growth</motion.h1>
                    <ChartNoAxesCombined strokeWidth={2} size={40} className="text-primary border rounded-full p-2" />

                </motion.div>
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    src="/flower.png" alt="Benefits Image" className="absolute top-145 right-95 w-14 h-60 rotate-90" />

                <motion.img
                    {...scrollAnimation}
                    src="/bottle.png" alt="Benefits Image" className="w-full" />
            </div>
        </div>

    )
}
