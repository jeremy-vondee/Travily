import type { FC } from "react"
import { buttonVariants } from "./ui/button"

const Header: FC = () => {
    return (
        <>
            <nav className="bg-primary h-16 flex items-center pl-3 pr-3 justify-between">
                <h2 className="text-white">Travily</h2>
                <div className="flex justify-evenly items-center w-2xl">
                    <a href="help" className="text-white">
                        Help
                    </a>
                    <a href="/mytrip" className="text-white">
                        My Trip
                    </a>
                    <a href="login" className="text-secondary">
                        Login
                    </a>
                    <a
                        href="signup"
                        className={buttonVariants({
                            variant: "outline",
                            size: "sm",
                            className:
                                "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-secondary",
                        })}>
                        Signup
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Header
