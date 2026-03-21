import * as React from "react"
import type { FC } from "react"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

const ModeToggle: FC = () => {
    const [theme, setThemeState] = React.useState<"theme-light" | "dark">(
        () => {
            if (typeof window === "undefined") return "theme-light"

            const rawSaved = localStorage.getItem("theme")

            // Only accept EXACT matches
            if (rawSaved === "dark") return "dark"
            if (rawSaved === "theme-light") return "theme-light"

            // System preference fallback
            return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "theme-light"
        },
    )

    React.useEffect(() => {
        if (typeof window === "undefined") return

        const isDark = theme === "dark"
        document.documentElement.classList[isDark ? "add" : "remove"]("dark")
        localStorage.setItem("theme", theme === "dark" ? "dark" : "theme-light")
    }, [theme])

    return (
        <>
            <div className="flex items-center gap-1 p-1 bg-primary/10 rounded-md">
                <button
                    onClick={() => setThemeState("theme-light")}
                    className={`
                        p-2 rounded-md transition-all duration-200 flex items-center justify-center
                        ${
                            theme === "theme-light"
                                ? "bg-white text-primary shadow-md"
                                : "text-white hover:bg-white/20"
                        }
                    `}
                    aria-label="Light theme">
                    <Sun className="h-4 w-4" />
                </button>
                <div className="w-px h-6 bg-white/30 mx-1" />
                <button
                    onClick={() => setThemeState("dark")}
                    className={`
                        p-2 rounded-md transition-all duration-200 flex items-center justify-center
                        ${
                            theme === "dark"
                                ? "bg-white text-primary shadow-md"
                                : "text-white hover:bg-white/20"
                        }
                        `}
                    aria-label="Dark theme">
                    <Moon className="h-4 w-4" />
                </button>
            </div>
        </>
    )
}

export default ModeToggle
