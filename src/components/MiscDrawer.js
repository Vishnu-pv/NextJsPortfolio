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

export function MiscDrawer() {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button className="cursor-pointer hover:bg-white hover:text-black border-2 px-6 py-1 text-white font-bold border-black rounded bg-gray-900 tracking-widest">MISC</Button>
                </DialogTrigger>
                <DialogContent className="w-9/12 h-1/2">
                    <DialogHeader>
                        <DialogTitle className="text-red-600 font-bold text-[20px]">Let&apos;s Go!</DialogTitle>
                        <DialogDescription className="text-black font-medium text-[18px]">
                           Keep on reading...
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button className="cursor-pointer hover:bg-white hover:text-black border-2 px-6 py-1 text-white font-bold border-black rounded bg-gray-900 tracking-widest">
                 MISC
                </Button>
            </DrawerTrigger>
            <DrawerContent className="h-1/2">
                <DrawerHeader className="text-left">
                    <DrawerTitle className="text-red-600">Let&apos;s Go!</DrawerTitle>
                    <DrawerDescription>
                        Keep on Reading...
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
