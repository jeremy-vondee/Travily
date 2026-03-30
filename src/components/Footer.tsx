const Footer = () => {
    return (
        <div className="bg-primary text-white">
            <div className="p-8 md:p-12 lg:p-16 space-y-8 md:space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {/* Company */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:opacity-80 transition">
                                About
                            </a>
                            <a href="#" className="block hover:opacity-80 transition">
                                Careers
                            </a>
                            <a href="#" className="block hover:opacity-80 transition">
                                How we work
                            </a>
                            <a href="#" className="block hover:opacity-80 transition">
                                Environmental policy
                            </a>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-lg font-semibold">Support</h3>
                        <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:opacity-80 transition">
                                Help and contacts
                            </a>
                            <a href="#" className="block hover:opacity-80 transition">
                                Advertise with us
                            </a>
                            <a href="#" className="block hover:opacity-80 transition">
                                Our partners
                            </a>
                            <a href="#" className="block hover:opacity-80 transition">
                                Accessibility and site help
                            </a>
                        </div>
                    </div>

                    {/* Policies */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-lg font-semibold">Policies</h3>
                        <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:opacity-80 transition">
                                Privacy policy
                            </a>
                            <a href="#" className="block hover:opacity-80 transition">
                                Legal policy
                            </a>
                            <a href="#" className="block hover:opacity-80 transition">
                                Cookie notice
                            </a>
                            <a href="#" className="block hover:opacity-80 transition">
                                Terms & conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo + Socials */}
            <div className="border-t border-white/10 px-8 py-8 md:py-12 lg:px-16">
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6 md:gap-12 text-center md:text-left">
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-3 shrink-0">
                        <img src="/logo.svg" alt="Travily logo" className="h-8 w-auto" />
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                        <a
                            href="#"
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all"
                        >
                            <img src="/facebook.svg" alt="Facebook" className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all"
                        >
                            <img src="/instagram.svg" alt="Instagram" className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all"
                        >
                            <img src="/x.svg" alt="X" className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all"
                        >
                            <img src="/gmail.svg" alt="Email" className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom: Copyright */}
            <div className="border-t border-white/10 px-8 py-6 md:px-16 text-center text-sm text-white/70">
                <p>
                    © 2026 Travily. All rights reserved. |{" "}
                    <a href="#" className="hover:opacity-80 underline">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer
