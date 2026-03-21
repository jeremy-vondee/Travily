import * as React from "react"
import type { FC } from "react"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

const ModeToggle: FC = () => {
    const [theme, setThemeState] = React.useState<'system' | "light" | "dark">(
        () => {
            if (typeof window === "undefined") return "light"

            // Get persisted theme
            const rawSaved = localStorage.getItem("theme")

            // Set state based on system preferences from persisted theme
            if(rawSaved === 'system') {
                return window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
            }
            
            return rawSaved
        },
    )

    function setAppTheme(theme: 'system' | 'light' | 'dark') {
        if(theme === 'system) {
           setThemeState(window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light")
        } else {
            setThemeState(theme)
            // Get the root element (<html>)
            const root = document.documentElement
            // Remove previously applied schemes from the root element
            root.classList.remove('light', 'dark')
            // Add the currently selected theme
            root.classList.add(theme)
        }
        
       
        // Persist in local storage
        localStorage.setItem("theme", theme)
    }

    return (
        <>
            <div className="flex items-center gap-1 p-1 bg-primary/10 rounded-md">
                <button
                    onClick={() => setAppTheme("light")}
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
                    onClick={() => setAppTheme("dark")}
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
