"use client"
import React, {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import splitString from "../util/RegExUtil";
import {GitHubLogoIcon, HeartFilledIcon, InstagramLogoIcon, LinkedInLogoIcon} from '@radix-ui/react-icons'
import {AboutDrawer} from "@/components/AboutDrawer";
import {SkillsDrawer} from "@/components/SkillsDrawer";
import {ProjectsDrawer} from "@/components/ProjectsDrawer";
import {MiscDrawer} from "@/components/MiscDrawer";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {cn} from "@/lib/utils";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useMediaQuery} from "@custom-react-hooks/all";
import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import resend, {Resend} from "resend";
import EmailTemplate from "@/components/EmailTemplate";

export default function Home() {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const menuButtonRef = useRef(null);

    useEffect(() => {
        const handleClick = () => {
            if (menuButtonRef.current) {
                menuButtonRef.current.click();
            }
        };

        window.onload = handleClick;

        return () => {
            window.onload = null; // Cleanup
        };
    }, []);

    const name = "Hey, I'm Vishnu";
    const nameChars = splitString(name);
    const lineVariants = {
        hidden: { width: 0 },
        reveal: { width: "60%", transition: { duration: 2 }, opacity: 0.3 }
    };
    const footerLine = {
        hidden: { width: 0, left : "50%" },
        reveal: { width: "50%", left: "25%", transition: { duration: 2 },}
    };

    const verticalLineVariants = {
        hidden: { height: 0 },
        reveal: { height: "30%", transition: { duration: 2 }, opacity: 0.3 }
    };
    const charVariants = {
        hidden: { opacity: 0, },
        reveal: { opacity: 1, transition: { duration: 2, ease: "easeIn"}},
    };

    const topBar = {
        hidden: { y: -22, opacity: 0.5 }, // Initial position above by 10
        reveal: { y: 0, opacity: 1, transition: { duration: 1.5, ease: "easeIn" } }, // Moves down by 10px
    };

    const leftBar = {
        hidden: { x: -22, opacity: 0.5 }, // Initial position above by 10
        reveal: { x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeIn" } }, // Moves down by 10px
    };

    const rightBar = {
        hidden: { x: 22, opacity: 0.5 }, // Initial position above by 10
        reveal: { x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeIn" } }, // Moves down by 10px
    };

    const button = {
        whileHover: {
            scale: 1.1
        },
        hidden: { opacity: 0 }, // Initial position above by 10
        reveal: {  opacity: 1, transition: { duration: 1, ease: "easeIn" } }, // Moves down by 10px
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
        <main className="bg-[#f2f3f4] flex flex-col h-dvh relative overflow-hidden">
            <div className="wrapper z-0">
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
            </div>
            <motion.div className="absolute m-0 h-1.5 w-full z-49 bg-[#1e1e1e] flex justify-center items-center"  variants={topBar} initial="hidden" animate="reveal">
                <motion.div className="flex h-10 w-1/4">
                    <div className="h-full w-1/2 bg-[#1e1e1e] z-0 transform skew-x-45"></div>
                    <div className="h-full w-1/2 bg-[#1e1e1e] z-0 transform -skew-x-45"></div>
                </motion.div>
            </motion.div>
            <motion.div className="absolute top-0 left-0 z-50 h-dvh w-1.5 bg-[#1e1e1e] flex justify-center items-center"  variants={leftBar} initial="hidden" animate="reveal">
                <motion.div className="top-0 left-0 flex flex-col h-1/2 w-14">
                    <div className="h-1/2 w-10 bg-[#1e1e1e] z-50 transform -rotate-180 skew-y-45"></div>
                    <div className="h-1/2 w-10 bg-[#1e1e1e] z-50 transform -rotate-180 -skew-y-45"></div>
                </motion.div>
            </motion.div>
            <motion.div className="absolute top-0 right-0 z-50 h-dvh w-1.5 bg-[#1e1e1e] flex justify-center items-center"  variants={rightBar} initial="hidden" animate="reveal">
                <motion.div className="top-0 left-0 flex flex-col  h-1/2 w-14">
                    <div className="h-1/2 w-10 bg-[#1e1e1e] z-50 transform -skew-y-45"></div>
                    <div className="h-1/2 w-10 bg-[#1e1e1e] z-50 transform skew-y-45"></div>
                </motion.div>
            </motion.div>
            <section className="h-screen mt-5 relative overflow-hidden text-teal-700 flex flex-col justify-center items-center">
                <motion.span className="absolute top-6 w-dvw flex justify-evenly">
                    <motion.span className="cursor-pointer" initial="hidden" animate="reveal" whileHover="whileHover" variants={button}>
                        <AboutDrawer/>
                    </motion.span>
                    <motion.span className="cursor-pointer" initial="hidden" animate="reveal" whileHover="whileHover" variants={button}>
                        <SkillsDrawer/>
                    </motion.span>
                    <motion.span className="cursor-pointer" initial="hidden" animate="reveal" whileHover="whileHover" variants={button}>
                        <ProjectsDrawer/>
                    </motion.span>
                    <motion.span className="cursor-pointer" initial="hidden" animate="reveal" whileHover="whileHover" variants={button}>
                        <MiscDrawer/>
                    </motion.span>
                </motion.span>
                <motion.div className="absolute inset-y-60 left-3/4 z-1 w-0.5 h-full bg-gray-900" variants={verticalLineVariants} initial="hidden" animate="reveal" />
                <motion.div className="absolute inset-y-60 right-3/4 z-1 w-0.5 h-full bg-gray-900" variants={verticalLineVariants} initial="hidden" animate="reveal" />
                <motion.div className="w-full h-0.5 bg-gray-900" variants={lineVariants} initial="hidden" animate="reveal" />
                <motion.span className="mt-8 z-999" initial="hidden" animate="reveal" transition={{staggerChildren:0.1}}>
                    <h1 className="font-bold font-audioWide text-2xl lg:text-8xl md:text-5xl sm:text-2xl">
                        {nameChars.map((char) => (
                            <motion.span key={char} variants={charVariants}>
                                {char}
                            </motion.span>

                        ))}
                    </h1>
                </motion.span>
                <motion.div className="w-full mt-8 h-0.5 bg-gray-900" variants={lineVariants} initial="hidden" animate="reveal" />
                <section className="text-gray-700 flex flex-col justify-center items-center">
                    <motion.div variants={charVariants} initial="hidden" animate="reveal">
                        <h1 className="text-xl font-audioWide tracking-widest inline-block mt-4 font-medium bg-gray-900 text-transparent bg-clip-text">
                            Connect With Me
                        </h1>
                    </motion.div>
                    <div className="flex flex-row mt-4">
                        <motion.div className="px-2 sm:px-6" variants={iconScale} whileHover="whileHover" initial="hidden" animate="reveal">
                            <InstagramLogoIcon width={50} height={50} className="hover:cursor-pointer" onClick={handleInstagramClick}/>
                        </motion.div>
                        <motion.div className="px-2 sm:px-6" variants={iconScale} whileHover="whileHover" initial="hidden" animate="reveal">
                            <LinkedInLogoIcon width={50} height={50} className="hover:cursor-pointer"  onClick={handleLinkedInClick}/>
                        </motion.div>
                        <motion.div className="px-2 sm:px-6" variants={iconScale} whileHover="whileHover" initial="hidden" animate="reveal">
                            <GitHubLogoIcon width={50} height={50} className="hover:cursor-pointer"  onClick={handleGithubClick}/>
                        </motion.div>
                    </div>
                </section>
                {/*<section className="mt-6">*/}
                {/*    <div>*/}
                {/*        <DrawerDialogDemo/>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section className="mt-5 top-2/3">
                    {/*<Button className="cursor-pointer hover:bg-white hover:text-black border-2 px-6 py-1 text-white font-bold border-black rounded bg-gray-900 tracking-widest">Drop A Message</Button>*/}
                    {isDesktop ?
                        <Dialog>
                            <DialogTrigger className="cursor-pointer hover:bg-white hover:text-black border-2 px-6 py-1 text-white font-bold border-black rounded bg-gray-900 -tracking-tight">Drop A Message</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Send Message</DialogTitle>
                                    <DialogDescription>
                                        <ProfileForm/>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        :
                        <Drawer open={open} onOpenChange={setOpen}>
                            <DrawerTrigger asChild>
                                <DialogTrigger className="cursor-pointer hover:bg-white hover:text-black border-2 px-6 py-1 text-white font-bold border-black rounded bg-gray-900 -tracking-tight">
                                    Drop A Message
                                </DialogTrigger>
                            </DrawerTrigger>
                            <DrawerContent className="h-1/2">
                                <DrawerHeader className="text-left">
                                    <DrawerTitle>Send Message</DrawerTitle>
                                    <DrawerDescription>
                                        <ProfileForm/>
                                    </DrawerDescription>
                                </DrawerHeader>
                                {/*<DrawerFooter className="pt-2">*/}
                                {/*    <DrawerClose asChild>*/}
                                {/*        <Button variant="outline">Close</Button>*/}
                                {/*    </DrawerClose>*/}
                                {/*</DrawerFooter>*/}
                            </DrawerContent>
                        </Drawer>
                    }

                </section>

            </section>
            <footer className="text-center">
                   <span className="text-center">Designed With &nbsp;
                       <HeartFilledIcon className="inline-block"></HeartFilledIcon>
                     <motion.div className="absolute inset-x-1/4 bottom-0 h-0.5 mb-0.5 flex bg-black" variants={footerLine} initial="hidden" animate="reveal" />
                </span>
            </footer>
        </main>
    );
}

function ProfileForm({ className }) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Email',email)
        console.log('Message',message)
        await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify({email, message})
        }) .then((res) => res.json())
            .then((data) => {

            })
            .catch((err) => {
                console.log(err)
                alert("Ooops! unfortunately some error has occurred.");
            });
    };
    return (
        <form className={cn("grid items-start gap-4 mt-4", className)} onSubmit={handleSubmit}>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Message</Label>
                <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <Button type="submit">Send</Button>
        </form>
    );
}