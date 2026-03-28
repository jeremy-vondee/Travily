import { Laptop, Moon, Sun } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useLayoutEffect, useState } from "react";
import clsx from "clsx";

export type ThemeMode = "system" | "light" | "dark";

// Define supported theme modes
const SUPPORTED_THEME_MODES = new Set<ThemeMode>(["system", "light", "dark"]);

const ModeToggle = () => {
	const [theme, setThemeState] = useState<ThemeMode | null>(null);

	useLayoutEffect(() => {
		// Get persisted theme
		const rawSaved = localStorage.getItem("theme") as ThemeMode | null;

		// If the persisisted theme value is not supported, return "light"
		if (!rawSaved || !SUPPORTED_THEME_MODES.has(rawSaved)) {
			return setThemeState("system");
		}

		return setThemeState(rawSaved);
	}, []);

	function setAppTheme(theme: ThemeMode) {
		setThemeState(theme);

		// Persist in local storage
		localStorage.setItem("theme", theme);

		// Get the root element (<html>)
		const root = document.documentElement;

		// Remove previously applied schemes from the root element
		root.classList.remove("light", "dark");

		if (theme === "system") {
			const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

			// Add the currently selected theme
			root.classList.add(isDark ? "dark" : "light");
		} else {
			// Add the currently selected theme
			root.classList.add(theme);
		}
	}

	return (
		<ToggleGroup
			type="single"
			spacing={2}
			value={theme ?? undefined}
			onValueChange={(value) => {
				setAppTheme(value as ThemeMode);
			}}
		>
			<ToggleGroupItem
				value="system"
				className={clsx({ "data-[state=on]:bg-white": theme === "system" })}
			>
				<Laptop />
			</ToggleGroupItem>
			<ToggleGroupItem
				value="light"
				className={clsx({ "data-[state=on]:bg-white": theme === "light" })}
			>
				<Sun />
			</ToggleGroupItem>
			<ToggleGroupItem
				value="dark"
				className={clsx({ "data-[state=on]:bg-white": theme === "dark" })}
			>
				<Moon />
			</ToggleGroupItem>
		</ToggleGroup>
	);
};

export default ModeToggle;
