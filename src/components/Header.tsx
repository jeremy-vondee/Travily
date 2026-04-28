import { useEffect, useState } from "react"
import { CircleQuestionMark, Ticket, LogOut, User as UserIcon, Menu, X } from "lucide-react"
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
        setIsOpen(false)
    }

    const closeMenu = () => setIsOpen(false)

    return (
        <>
            <nav className="bg-primary h-16 flex items-center pl-3 pr-3 justify-between fixed top-0 left-0 z-50 w-screen">
                <a href="/" className="shrink-0">
                    <img src="/logo.svg" alt="Travily logo" />
                </a>

                <div className="hidden lg:flex items-center gap-6">
                    <a
                        href="/mybooking"
                        className="text-white inline-flex items-center gap-1 h-10 hover:underline"
                    >
                        <Ticket className="w-4 h-4 shrink-0 rotate-317 -translate-y-0.5" />
                        <span className="leading-none">My Booking</span>
                    </a>

                    <a
                        href="/help"
                        className="text-white inline-flex items-center gap-1 h-10 hover:underline"
                    >
                        <CircleQuestionMark className="w-4 h-4 shrink-0" />
                        <span className="leading-none">Help</span>
                    </a>

                    <LanguageDiaglog />
                    <ModeToggle />

                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="h-10 w-auto rounded-full px-2 gap-3"
                                >
                                    <Avatar className="h-9 w-9 shrink-0">
                                        <AvatarImage
                                            src={
                                                user.user_metadata?.avatar_url as string | undefined
                                            }
                                            alt={(user.email as string | undefined) ?? ""}
                                        />
                                        <AvatarFallback className="bg-white/15 text-white font-semibold">
                                            {(user.user_metadata?.full_name ||
                                                user.email)?.[0]?.toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-semibold leading-none">
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

                <div className="flex items-center gap-1 lg:hidden">
                    <ModeToggle />
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="p-2 mr-1 rounded focus:outline-none relative w-10 h-8 flex flex-col justify-center"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-white" />
                        ) : (
                            <Menu className="h-6 w-6 text-white" />
                        )}
                    </button>
                </div>
            </nav>

            <nav
                className={[
                    "lg:hidden fixed top-16 left-0 z-40 w-screen bg-background border-b border-border shadow-md transition-all duration-300",
                    isOpen ? "block" : "hidden",
                ].join(" ")}
            >
                <div className="flex flex-col p-4 gap-2">
                    <a
                        href="/mybooking"
                        onClick={closeMenu}
                        className="text-foreground inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
                    >
                        <Ticket className="w-5 h-5 shrink-0 rotate-317 -translate-y-0.5" />
                        My Booking
                    </a>

                    <a
                        href="/help"
                        onClick={closeMenu}
                        className="text-foreground inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
                    >
                        <CircleQuestionMark className="w-5 h-5 shrink-0" />
                        Help
                    </a>

                    <div className="my-2 border-t border-border" />

                    <LanguageDiaglog />

                    <div className="mt-2">
                        <ModeToggle />
                    </div>

                    <div className="mt-2">
                        {user ? (
                            <Button
                                variant="default"
                                className="h-12 w-full justify-start gap-3"
                                onClick={closeMenu}
                            >
                                <Avatar className="h-9 w-9 shrink-0">
                                    <AvatarImage
                                        src={user.user_metadata?.avatar_url as string | undefined}
                                        alt={(user.email as string | undefined) ?? ""}
                                    />
                                    <AvatarFallback className="bg-white/15 text-white font-semibold">
                                        {(user.user_metadata?.full_name ||
                                            user.email)?.[0]?.toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col items-start leading-none">
                                    <span className="font-semibold text-white">
                                        {user.user_metadata?.full_name || user.email}
                                    </span>
                                    <span className="text-xs text-white/70">{user.email}</span>
                                </div>
                            </Button>
                        ) : (
                            <AuthDialog />
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
