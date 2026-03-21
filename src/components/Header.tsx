import type { FC } from "react"
import { useState } from "react"
import { buttonVariants } from "./ui/button"
import { CircleQuestionMark, Plane } from "lucide-react"
import ModeToggle from "./ModeToggle"

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }
    return (
        <>
            <nav className="bg-primary h-16 flex items-center pl-3 pr-3 justify-between">
                <h2 className="text-white">Travily</h2>
                {/* Desktop nav */}
                <div className="hidden lg:flex justify-evenly items-center w-1/3">
                    <a
                        href="/help"
                        className="text-white inline-flex items-center gap-1 pl-1 h-10">
                        <CircleQuestionMark className="w-4 h-4 shrink-0 " />
                        <span className="leading-none">Help</span>
                    </a>
                    <a
                        href="/mytrip"
                        className="text-white inline-flex items-center gap-1 pl-1 h-10">
                        <Plane className="w-4 h-4 shrink-0 rotate-317 -translate-y-0.5" />
                        <span className="leading-none">My Trip</span>
                    </a>
                    <ModeToggle />
                    <a href="/login" className="text-white">
                        Login
                    </a>
                    <a
                        href="/signup"
                        className={buttonVariants({
                            variant: "outline",
                            size: "sm",
                            className:
                                "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-secondary",
                        })}>
                        Signup
                    </a>
                </div>
                {/* Mobile controls */}
                <div className="flex items-center gap-1 lg:hidden">
                    <ModeToggle />
                    {/* Mobile hamburger button */}
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="lg:hidden p-2 mr-1 rounded focus:outline-none relative w-10 h-8 flex flex-col justify-center">
                        <span
                            className={[
                                "hamburger-line w-6 h-0.5 bg-white rounded transition-all duration-300 origin-center mb-1.5",
                                isOpen ? "rotate-45 translate-y-2" : "",
                            ].join(" ")}
                        />
                        <span
                            className={[
                                "hamburger-line w-6 h-0.5 bg-white rounded transition-all duration-300",
                                isOpen ? "opacity-0" : "",
                            ].join(" ")}
                        />
                        <span
                            className={[
                                "hamburger-line w-6 h-0.5 bg-white rounded transition-all duration-300 origin-center mt-1.5",
                                isOpen ? "-rotate-45 -translate-y-2" : "",
                            ].join(" ")}
                        />
                    </button>
                </div>
            </nav>

            {/* mobile menu */}
            <nav
                id="mobile-menu"
                className={[
                    "lg:hidden bg-slate-900 border-bg-slate-800 transition-all duration-300",
                    isOpen ? "block" : "hidden",
                ].join(" ")}>
                <a
                    href="help"
                    className="block text-white px-5 py-4 text-lg border-b border-gray-700 hover:bg-gray-700 transition-colors">
                    Help
                </a>
                <a
                    href="/mytrip"
                    className="block text-white px-5 py-4 text-lg border-b border-gray-700 hover:bg-gray-700 transition-colors">
                    My Trip
                </a>
                <a
                    href="login"
                    className="block text-white px-5 py-4 text-lg border-b border-gray-700 hover:bg-gray-700 transition-colors">
                    Login
                </a>
                <a
                    href="signup"
                    className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                        className:
                            "mx-5 mt-4 mb-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 border-secondary",
                    })}>
                    Signup
                </a>
            </nav>
        </>
    )
}

export default Header
