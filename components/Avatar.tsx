import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatar(props:HTMLAttributes<HTMLElement>){
    const {className,children,...otherprops} = props;
return (
    <div className={twMerge("size-20 rounded-full overflow-hidden border-4 border-blue500 p-1 bg-neutral-900",className)} {...otherprops}>
        {children}
    </div>
)
}