import { useState } from "react"
import { Button, buttonVariants } from "./ui/button"
import { CircleQuestionMark, Ticket, CircleUserRound } from "lucide-react"
import ModeToggle from "./ModeToggle"
import LanguageDiaglog from "./LanguageDialog"

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
                    <Button
                        variant="outline"
                        size="icon-lg"
                        className="bg-primary border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 hover:shadow-none"
                    >
                        <CircleUserRound className="[&_svg]:size-7 shrink-0 text-white" />
                    </Button>
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
                    "lg:hidden bg-slate-900 border-bg-slate-800 transition-all duration-300 flex-col items-start",
                    isOpen ? "flex" : "hidden",
                ].join(" ")}
            >
                <a
                    href="/help"
                    className="ml-2 text-white inline-flex items-center gap-1 pl-1 h-10"
                >
                    <CircleQuestionMark className="w-4 h-4 shrink-0 " />
                    <span className="leading-none">Help</span>
                </a>
                <a
                    href="/mytrip"
                    className="ml-2 text-white inline-flex items-center gap-1 pl-1 h-10"
                >
                    <Ticket className="w-4 h-4 shrink-0 rotate-317 -translate-y-0.5" />
                    <span className="leading-none">My Trip</span>
                </a>
                <a href="/login" className="ml-3 text-white">
                    Login
                </a>
                <a
                    href="/signup"
                    className={buttonVariants({
                        variant: "default",
                        size: "sm",
                        className:
                            "mx-5 mt-4 mb-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 border-secondary dark:bg-white dark:text-primay dark:hover:bg-white",
                    })}
                >
                    Signup
                </a>
            </nav>
        </>
    )
}

export default Header
