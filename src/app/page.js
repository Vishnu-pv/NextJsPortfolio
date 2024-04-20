"use client"
import React from "react";
import { motion } from "framer-motion";
import splitString from "../util/RegExUtil";
import { Button } from "@/components/ui/button"
import {DrawerDialogDemo} from "@/components/Drawer";
import {GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon} from '@radix-ui/react-icons'


export default function Home() {
    const name = "Hey, I'm Vishnu";
    const nameChars = splitString(name);
    const lineVariants = {
        hidden: { width: 0 },
        reveal: { width: "60%", transition: { duration: 2 } }
    };
    const verticalLineVariants = {
        hidden: { height: 0 },
        reveal: { height: "30%", transition: { duration: 2 } }
    };
    const charVariants = {
        hidden: { opacity: 0 },
        reveal: { opacity: 1, transition: { duration: 2 }},
    };

    const iconScale = {
        whileHover: {
        scale: 1.3
    },
        hidden: { opacity: 0 },
        reveal: { opacity: 1, transition: { duration: 2 } },
    };
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/itsm3_vishnu/', '_blank');
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/vishnupvofficial/', '_blank');
    }
    const handleGithubClick = () => {
        window.open('https://github.com/Vishnu-pv/', '_blank');
    }

    return (
        <main className="bg-gradient-to-r from-sky-200 to-purple-300 flex flex-col h-screen relative overflow-hidden">
            <section className="h-screen overflow-hidden text-teal-700 flex flex-col justify-center items-center">
                <motion.div className="absolute inset-y-60 left-3/4 z-1 w-0.5 h-full bg-gray-900" variants={verticalLineVariants} initial="hidden" animate="reveal" />
                <motion.div className="absolute inset-y-60 right-3/4 z-1 w-0.5 h-full bg-gray-900" variants={verticalLineVariants} initial="hidden" animate="reveal" />
                <motion.div className="w-full h-0.5 bg-gray-900" variants={lineVariants} initial="hidden" animate="reveal" />
                <div className="mt-8 z-999">
                    <h1 className="font-extrabold text-2xl lg:text-8xl md:text-5xl sm:text-2xl">
                        {nameChars.map((char) => (
                            <motion.span key={char} variants={charVariants} initial="hidden" animate="reveal" transition={{ duration: 0.5 }}>
                                {char}
                            </motion.span>

                        ))}
                    </h1>
                </div>
                <motion.div className="w-full mt-8 h-0.5 bg-gray-900" variants={lineVariants} initial="hidden" animate="reveal" />
                <section className="text-gray-700 flex flex-col justify-center items-center">
                    <h1 className="text-xl inline-block mt-4 bg-gradient-to-r from-yellow-700 to-red-600 text-transparent bg-clip-text">
                        Connect With Me
                    </h1>

                    <div className="flex flex-row">
                        <motion.div className="px-2" variants={iconScale} whileHover="whileHover" initial="hidden" animate="reveal">
                            <InstagramLogoIcon width={50} height={50} onClick={handleInstagramClick}/>
                        </motion.div>
                        <motion.div className="px-2" variants={iconScale} whileHover="whileHover" initial="hidden" animate="reveal">
                            <LinkedInLogoIcon width={50} height={50} onClick={handleLinkedInClick}/>
                        </motion.div>
                        <motion.div className="px-2" variants={iconScale} whileHover="whileHover" initial="hidden" animate="reveal">
                            <GitHubLogoIcon width={50} height={50} onClick={handleGithubClick}/>
                        </motion.div>
                    </div>
                </section>
                <section className="mt-6">
                    <div>
                        <DrawerDialogDemo/>
                    </div>
                </section>
            </section>

        </main>
    );
}