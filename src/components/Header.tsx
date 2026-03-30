import { useState } from "react"
import { CircleQuestionMark, Ticket } from "lucide-react"
import ModeToggle from "./ModeToggle"
import LanguageDiaglog from "./LanguageDialog"
import LogIn from "./Login"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }
    return (
        <>
            <nav className="bg-primary h-16 flex items-center pl-3 pr-3 justify-between">
                <a href="/">
                    <img src="/logo.svg" alt="Travily logo" />
                </a>
                {/* Desktop nav */}
                <div className="hidden lg:flex justify-evenly items-center w-1/3">
                    <a
                        href="/mybooking"
                        className="text-white inline-flex items-center gap-1 pl-1 h-10"
                    >
                        <Ticket className="w-4 h-4 shrink-0 rotate-317 -translate-y-0.5" />
                        <span className="leading-none">My Booking</span>
                    </a>
                    <a href="/help" className="text-white inline-flex items-center gap-1 pl-1 h-10">
                        <CircleQuestionMark className="w-4 h-4 shrink-0 " />
                        <span className="leading-none">Help</span>
                    </a>
                    <LanguageDiaglog />
                    <ModeToggle />
                    <LogIn />
                </div>
                {/* Mobile controls */}
                <div className="flex items-center gap-1 lg:hidden">
                    <ModeToggle />
                    {/* Mobile hamburger button */}
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="lg:hidden p-2 mr-1 rounded focus:outline-none relative w-10 h-8 flex flex-col justify-center"
                    >
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
                    "lg:hidden bg-gray-700 border-bg-slate-800 transition-all duration-300 flex-col items-start",
                    isOpen ? "flex" : "hidden",
                ].join(" ")}
            >
                <a
                    href="/mybooking"
                    className="ml-3 mt-2 text-white inline-flex items-center gap-1 pl-1 h-10"
                >
                    <Ticket className="w-4 h-4 shrink-0 rotate-317 -translate-y-0.5" />
                    <span className="leading-none">My Booking</span>
                </a>
                <a
                    href="/help"
                    className="ml-3 text-white inline-flex items-center gap-1 pl-1 h-10"
                >
                    <CircleQuestionMark className="w-4 h-4 shrink-0 " />
                    <span className="leading-none">Help</span>
                </a>
                <LanguageDiaglog />
                <LogIn />
            </nav>
        </>
    )
}

export default Header
