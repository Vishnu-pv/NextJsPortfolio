"use client"
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@custom-react-hooks/all";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DrawerDialogDemo() {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" className="text-white bg-gray-500">About Me!</Button>
                </DialogTrigger>
                <DialogContent className="w-9/12 h-1/2">
                    <DialogHeader>
                        <DialogTitle className="text-red-600 font-bold text-[20px]">About Me!</DialogTitle>
                        <DialogDescription className="text-black font-medium text-[18px]">
                            Hey there! Welcome to my PortFolio. I&apos;m a FullStack Developer.
                            I&apos;m enthusiastic about leveraging my skills and experience to tackle new challenges and contribute effectively to any project or team.
                            Let&apos;s connect and discuss how I can add value to your team or project!
                            <p className="mt-2">
                                Apart from my professional endeavors, I love playing Games, watching Movies, Series, Anime and love listening to good Music.
                                You could say I have good taste in Music! I&apos;m also good at badminton.
                            </p>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="secondary">About Me!</Button>
            </DrawerTrigger>
            <DrawerContent className="h-1/2">
                <DrawerHeader className="text-left">
                    <DrawerTitle className="text-red-600">About Me!</DrawerTitle>
                    <DrawerDescription>
                        Hey there! Welcome to my PortFolio. I&apos;m a FullStack Developer.
                        I&apos;m enthusiastic about leveraging my skills and experience to tackle new challenges and contribute effectively to any project or team.
                        Let&apos;s connect and discuss how I can add value to your team or project!
                        <p className="mt-2">
                            Apart from my professional endeavors, I love playing Games, watching Movies, Series, Anime and love listening to good Music.
                            You could say I have good taste in Music! I&apos;m also good at badminton.
                        </p>
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

function ProfileForm({ className }) {
    return (
        <form className={cn("grid items-start gap-4", className)}>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" defaultValue="shadcn@example.com" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@shadcn" />
            </div>
            <Button type="submit">Save changes</Button>
        </form>
    );
}
