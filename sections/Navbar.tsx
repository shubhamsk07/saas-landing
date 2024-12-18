"use client"
import logoImage from "@/assets/images/logo.svg"
import Button from "@/components/Button"
import { AnimatePresence ,motion} from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" }

]


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
     
    return (
        <>
        <section className="py-4 lg:py-8 flex justify-center mx-2 fixed w-full px-4 top-0 z-50 ">
            <div className="container lg:max-w-6xl lg:mx-8  border border-white/15 rounded-[30px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                <div className="grid grid-cols-2 lg:grid-cols-3   p-2 px-4 md:pr-2  justify-center items-center ">
                    <div className="">
                        <Image src={logoImage} alt="Layers logo" className="h-9 w-auto " />
                    </div>
                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="text-white flex gap-6 font-medium">
                            {navLinks.map(link => {
                                return <a href={link.href} key={link.label}>{link.label}</a>
                            })}
                        </nav>

                    </div>
                    <div className="flex justify-end gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" onClick={() => { setIsOpen(!isOpen) }} strokeLinejoin="round" className="feather text-white feather-menu flex md:hidden">
                            <line x1="3" y1="12" x2="21" y2="12" className={twMerge(" transition", isOpen && 'opacity-0')}></line>
                            <line x1="3" y1="6" x2="21" y2="6" className={twMerge(" origin-left transition", isOpen && 'rotate-45 -translate-y-[3.5px]')}></line>
                            <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left trnasition", isOpen && '-rotate-45  translate-y-[5px]')}></line ></svg>
                        <Button variant='secondary' className={`hidden  md:inline-flex items-center`}>Log In</Button>
                        <Button variant='primary' className="hidden md:inline-flex items-center">Sign up</Button>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen &&
                        (<motion.div 
                            initial={{height:0}}
                            animate={{height:"auto"}}
                            exit={{height:0}}
                        className=" overflow-hidden">
                            <div className="flex gap-4 flex-col cursor-pointer items-center py-4 ">
                            {navLinks.map(link => (
                                <a href={link.href} key={link.label} className="py-2 text-white">
                                    {link.label}
                                </a>
                            ))}
                             <Button variant="secondary">Log In</Button>
                             <Button variant='primary'>Sign Up</Button>
                            </div>
                            
                           
                        </motion.div>)}
                </AnimatePresence>
            </div>
        </section>
        <div className="pb-[86px] md:pb-[98px] lg:px-[130px]"></div>
        </>
    )
} 