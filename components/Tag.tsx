import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props:HTMLAttributes<HTMLDivElement>){
    const {className,children,...otherprops} = props;
    return (
        <div className={twMerge("inline-flex border border-lime-400 text-lime-400 px-3 py-1 rounded-full items-center uppercase",className)}{...otherprops}>
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    )
}