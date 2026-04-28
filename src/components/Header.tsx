import { useEffect, useState } from "react"
import { CircleQuestionMark, Ticket, LogOut, User as UserIcon } from "lucide-react"
import ModeToggle from "./ModeToggle"
import LanguageDiaglog from "./LanguageDialog"
import AuthDialog from "./AuthDialog"
import { supabase } from "@/lib/supabaseClient"
import { type User } from "@supabase/supabase-js"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const Header = () => {
    const [user, setUser] = useState<User | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const loadUser = async () => {
            const { data } = await supabase.auth.getUser()
            setUser(data.user)
        }

        void loadUser()

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })

        return () => subscription.unsubscribe()
    }, [])

    const signOut = async () => {
        await supabase.auth.signOut()
        setUser(null)
    }

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <>
            <nav className="bg-primary h-16 flex items-center pl-3 pr-3 justify-between fixed top-0 left-0 z-50 w-screen">
                <a href="/">
                    <img src="/logo.svg" alt="Travily logo" />
                </a>

                {/* Desktop nav */}
                <div className="hidden lg:flex justify-evenly items-center w-1/3">
                    <a
                        href="/mybooking"
                        className="text-white inline-flex items-center gap-1 pl-1 h-10 hover:underline"
                    >
                        <Ticket className="w-4 h-4 shrink-0 rotate-[317deg] -translate-y-0.5" />
                        <span className="leading-none">My Booking</span>
                    </a>
                    <a
                        href="/help"
                        className="text-white inline-flex items-center gap-1 pl-1 h-10 hover:underline"
                    >
                        <CircleQuestionMark className="w-4 h-4 shrink-0" />
                        <span className="leading-none">Help</span>
                    </a>
                    <LanguageDiaglog />
                    <ModeToggle />
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-10 w-10 rounded-full">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage
                                            src={
                                                user.user_metadata?.avatar_url as string | undefined
                                            }
                                            alt={user.email ?? ""}
                                        />
                                        <AvatarFallback className="bg-primary text-primary-foreground">
                                            {user.email?.[0]?.toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {user.user_metadata?.full_name || user.email}
                                        </p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            {user.email}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <UserIcon className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Ticket className="mr-2 h-4 w-4" />
                                    <span>My bookings</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={signOut}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <AuthDialog />
                    )}
                </div>

                {/* Mobile controls */}
                <div className="flex items-center gap-1 lg:hidden">
                    <ModeToggle />
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="p-2 mr-1 rounded focus:outline-none relative w-10 h-8 flex flex-col justify-center"
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

            {/* Mobile menu */}
            <nav
                id="mobile-menu"
                className={[
                    "lg:hidden fixed top-16 left-0 z-40 w-screen bg-gray-700 border-b border-slate-800 transition-all duration-300 flex-col items-start p-4",
                    isOpen ? "flex" : "hidden",
                ].join(" ")}
            >
                <a
                    href="/mybooking"
                    onClick={closeMenu}
                    className="text-white inline-flex items-center gap-2 py-2 hover:underline"
                >
                    <Ticket className="w-5 h-5 shrink-0 rotate-[317deg] -translate-y-0.5" />
                    My Booking
                </a>
                <a
                    href="/help"
                    onClick={closeMenu}
                    className="text-white inline-flex items-center gap-2 py-2 hover:underline"
                >
                    <CircleQuestionMark className="w-5 h-5 shrink-0" />
                    Help
                </a>
                <LanguageDiaglog />
                {user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-12 w-full justify-start gap-3">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage
                                        src={user.user_metadata?.avatar_url as string | undefined}
                                        alt={(user.email as string | undefined) ?? ""}
                                    />
                                    <AvatarFallback className="bg-primary text-primary-foreground">
                                        {user.email?.[0]?.toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="font-medium">
                                    {user.user_metadata?.full_name || user.email}
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-56">
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {user.user_metadata?.full_name || user.email}
                                    </p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                        {user.email}
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <UserIcon className="mr-2 h-4 w-4" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Ticket className="mr-2 h-4 w-4" />
                                My bookings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={signOut}>
                                <LogOut className="mr-2 h-4 w-4" />
                                Sign out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <AuthDialog />
                )}
            </nav>
        </>
    )
}

export default Header
