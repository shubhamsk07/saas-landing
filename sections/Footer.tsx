import logoImage from "@/assets/images/logo.svg"
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-20 lg:pt-32 px-12">
            <div className="container text-white">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div>
                        <Image src={logoImage} alt="Layers logo" />
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map(link=>(
                                <a className="text-white/50 text-sm" href={link.href}>{link.label}</a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}
