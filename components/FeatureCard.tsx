import { twMerge } from "tailwind-merge";

export default function (props:{
    title:string,
    description:string,
    className:string,
    children?:React.ReactNode

}) {
    const {title,children,description,className} = props;
    return (
        <div className={twMerge("bg-neutral-900 border border-white/10 p-6 px-4 rounded-xl",className)}>
            <div>{children}</div>
            <div className=" ">
                <h3 className="text-3xl font-medium mt-6 text-left pr-20">{title}</h3>
                <p className="text-white/50 mt-2 text-left">{description}</p>
            </div>
        </div>
    )
}