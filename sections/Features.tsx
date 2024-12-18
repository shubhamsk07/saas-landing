import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg"
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg"
import Image from "next/image";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg"
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return <section className="text-white mx-3 lg:max-w-7xl lg:mx-auto">
        <div className="container text-center">
            <Tag>Features</Tag>
            <h2 className="max-w-2xl mx-auto text-6xl font-medium text-center mt-6">Where power meets
                {" "} <span className="text-lime-400">simplicity</span></h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 px-4">
                <FeatureCard
                    title="Real-time Collabration"
                    description="Work together seamlessly with conflict free editing"
                    className="md:col-span-2 lg:col-span-1  group">
                    <div className="aspect-video flex items-center justify-center">
                        <Avatar className="z-40">
                            <Image src={avatar1} className="rounded-full" alt="Avatar 1" />
                        </Avatar>
                        <Avatar className="-ml-6 border-indigo-500 z-30">
                            <Image src={avatar2} className="rounded-full" alt="Avatar 2" />
                        </Avatar>
                        <Avatar className="-ml-6 border-amber-600 z-20">
                            <Image src={avatar3} className="rounded-full" alt="Avatar 3" />
                        </Avatar>
                        <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                            <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center relative">
                                <Image src={avatar4} alt="avatar 4" className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition" />
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <span className="rounded-full size-1.5 inline-flex bg-white" key={i}></span>
                                ))}
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Avatar>
                    </div>
                </FeatureCard>
                <FeatureCard
                    className="md:col-span-2 lg:col-span-1 group"
                    title="Interactive Prototyping"
                    description="Engage your client with prototpyes that react to user actions">
                    <div className="aspect-video flex justify-center items-center">
                        <p className="text-4xl px-6 font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                            We've achived <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative"><span>incredible </span>
                                <video
                                    src="/assets/gif-incredible.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 "
                                />{" "}</span>
                            growth this year</p>
                    </div>
                </FeatureCard>
                <FeatureCard
                    className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
                    title="Keyboard Quick Actions"
                    description="Powerful commads to help you create design more quickly"
                >
                    <div className="aspect-video flex items-center justify-center gap-6 ">
                        <Key className="w-28 group-hover:outline-lime-400 outline outline-2 duration-500 outline-transparent outline-offset-4 transition-all group-hover:translate-y-1">shift</Key>
                        <Key className="group-hover:outline-lime-400 outline-transparent duration-500 outline outline-2 outline-offset-4 transition-all delay-150 group-hover:translate-y-1" >alt</Key>
                        <Key className="group-hover:outline-lime-400 outline-transparent duration-500 outline outline-2 outline-offset-4 transition-all delay-150 group-hover:translate-y-1">C</Key>
                    </div>
                </FeatureCard>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:px-20 lg:mx-24">
                {features.map((feature) => {
                    return (<div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group">
                        <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex justify-center items-center pb-[2px] text-xl group-hover:rotate-45 transition duration-500">&#10038;</span>
                        <span className="font-medium md:text-lg">{feature}</span>
                    </div>
                    )
                })}
            </div>
        </div>
    </section>;

}
