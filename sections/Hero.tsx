'use client'
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png"
import designExample2Image from "@/assets/images/design-example-2.png"
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg"

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: [1] }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]

        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: [1] }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5 }]
        ]);
        rightDesignAnimate([
            [rightDesignScope.current, { opacity: [1] }, { duration: 0.5 ,delay:1.5}],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }]
        ]);
        rightPointerAnimate([
            [rightPointerScope.current, { opacity: [1] }, { duration: 0.5,delay:1.5 }],
            [rightPointerScope.current, { x: 160, y: 0 }, { duration: 0.5 }],
            [rightPointerScope.current, {x:0,y:[0,20,0]},{duration:0.5}]
        ])

    }, [])
    return (
        <section className="py-24 overflow-x-clip"
        style={{
            cursor:`url(${cursorYouImage.src}),auto`
        }}>
            <div className="container relative px-4 ">
                <motion.div
                    drag
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: - 100 }}

                    className="absolute -left-32 top-20 hidden lg:block">
                    <Image
                        src={designExample1Image}
                        alt="Design Example 1 image"
                        draggable={false}
                    />
                </motion.div>
                <motion.div
                    drag
                    ref={rightDesignScope}
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    className="absolute -right-60 -top-16 hidden lg:block">
                    <Image
                        src={designExample2Image}
                        alt="design example 2 Image"
                        draggable={false}
                    />
                </motion.div>
                <div className="flex justify-center ">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950">
                        ✨ $7.5 seed round raised
                    </div>
                </div>
                <motion.div
                
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andrea" />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x:260,y:100}}

                    className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Bryan" color='red' />
                </motion.div>
                <h1 className="text-6xl md:text-7xl lg:text-[7rem] text-center lg:max-w-7xl lg:mx-auto text-white font-medium px-10  mt-6">Impatful design, created effortlessly</h1>

                <p className="text-center px-4 text-xl text-white/50 max-w-2xl mt-8 mx-auto">
                    Design tools shouldn&apos;t slow you
                    down. Layers combines powerful features with an intuitive interface that keeps you in you creative flow.
                </p>
                <form className="flex justify-end  border md:justify-between border-white/15 rounded-full p-2  max-w-lg  mt-8 md:mx-auto ">
                    <input type="email" placeholder="Enter you email" className="bg-transparent  pl-4 w-full md:flex-1" />
                    <Button size="sm" type="submit" className=" flex px-1 w-28 justify-center items-center" variant='primary'>Sign Up</Button>
                </form>
            </div>

        </section >
    )
}