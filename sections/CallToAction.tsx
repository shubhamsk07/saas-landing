'use client'
import { AnimationPlaybackControls, motion, useAnimate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false)
    const animation = useRef<AnimationPlaybackControls>(null)
    const [scope, animate] = useAnimate()

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 20, ease: 'linear', repeat: Infinity }
        );
        
    }, [])

    useEffect(() => {
        if(!animation.current){
            return 
        }
        if (isHovered) {
            animation.current.speed = 0.5;
        } else {
            
            animation.current.speed = 1;
        }
    }, [isHovered])
    return (
        <section className="text-white">
            <div className="overflow-x-clip p-4 flex ">
                <motion.div
                    ref={scope}
                    
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="flex flex-none gap-16 pr-16 text-7xl font-medium cursor-pointer group">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex  items-center gap-16">
                            <span className="text-lime-400 text-7xl">&#10038;</span>
                            <span className=" whitespace-nowrap group-hover:text-lime-400 ">Try it for free</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}
