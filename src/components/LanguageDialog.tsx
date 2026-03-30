import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Check, ChevronDown, Globe } from "lucide-react"

type Language = {
    country: string
    language: string
    code: string
}

const languages: Language[] = [
    { country: "Argentina", language: "Spanish", code: "AR" },
    { country: "Australia", language: "English", code: "AU" },
    { country: "Austria", language: "German", code: "AT" },
    { country: "Belgium", language: "Dutch", code: "BE" },
    { country: "Belgium", language: "French", code: "BE" },
    { country: "Brazil", language: "Portuguese", code: "BR" },
    { country: "Canada", language: "English", code: "CA" },
    { country: "Canada", language: "French", code: "CA" },
    { country: "China", language: "Chinese", code: "CN" },
    { country: "Czech Republic", language: "Czech", code: "CZ" },
    { country: "Denmark", language: "Danish", code: "DK" },
    { country: "Egypt", language: "Arabic", code: "EG" },
    { country: "Finland", language: "Finnish", code: "FI" },
    { country: "France", language: "French", code: "FR" },
    { country: "Germany", language: "German", code: "DE" },
    { country: "Greece", language: "Greek", code: "GR" },
    { country: "India", language: "Hindi", code: "IN" },
    { country: "India", language: "Tamil", code: "IN" },
    { country: "Indonesia", language: "Indonesian", code: "ID" },
    { country: "Italy", language: "Italian", code: "IT" },
    { country: "Japan", language: "Japanese", code: "JP" },
    { country: "Korea", language: "Korean", code: "KR" },
    { country: "Malaysia", language: "Malay", code: "MY" },
    { country: "Mexico", language: "Spanish", code: "MX" },
    { country: "Morocco", language: "Arabic", code: "MA" },
    { country: "Netherlands", language: "Dutch", code: "NL" },
    { country: "Norway", language: "Norwegian", code: "NO" },
    { country: "Philippines", language: "Filipino", code: "PH" },
    { country: "Poland", language: "Polish", code: "PL" },
    { country: "Portugal", language: "Portuguese", code: "PT" },
    { country: "Russia", language: "Russian", code: "RU" },
    { country: "Saudi Arabia", language: "Arabic", code: "SA" },
    { country: "South Africa", language: "Afrikaans", code: "ZA" },
    { country: "Spain", language: "Spanish", code: "ES" },
    { country: "Sweden", language: "Swedish", code: "SE" },
    { country: "Switzerland", language: "German", code: "CH" },
    { country: "Switzerland", language: "Italian", code: "CH" },
    { country: "Thailand", language: "Thai", code: "TH" },
    { country: "Turkey", language: "Turkish", code: "TR" },
    { country: "UAE", language: "Arabic", code: "AE" },
    { country: "Ukraine", language: "Ukrainian", code: "UA" },
    { country: "United Kingdom", language: "English", code: "GB" },
    { country: "United States", language: "English", code: "US" },
    { country: "Vietnam", language: "Vietnamese", code: "VN" },
]

const LanguageDiaglog = () => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")

    const [currentLang, setCurrentLang] = useState<Language>(languages[0])

    useEffect(() => {
        const savedCode = localStorage.getItem("lang") || null

        if (!savedCode) {
            // Simple user-agent fallback (or use navigator.language)
            const isUS = navigator.language.startsWith("en-US")
            const defaultLang = isUS
                ? languages.find((l) => l.code === "US")
                : languages.find((l) => l.code === "GB")
            setCurrentLang(defaultLang || languages[0])
        } else {
            const savedLang = languages.find((l) => l.code === savedCode.toUpperCase())
            setCurrentLang(savedLang || languages[0])
        }
    }, [])

    const handleSelect = (selectedLang: Language) => {
        setCurrentLang(selectedLang)
        localStorage.setItem("lang", selectedLang.code)
        document.documentElement.lang = selectedLang.code.toLowerCase()
        setOpen(false)
        setSearch("")
    }

    const filteredSearch = languages.filter(
        (lang) =>
            lang.language.toLowerCase().includes(search.toLowerCase()) ||
            lang.country.toLowerCase().includes(search.toLowerCase()),
    )

    const isCurrent = (lang: Language) =>
        lang.code === currentLang.code &&
        lang.country === currentLang.country &&
        lang.language === currentLang.language

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-transparent text-white border-0 shadow-none 
             focus-visible:ring-0 focus-visible:ring-offset-0 
             hover:shadow-none
             dark:bg-transparent dark:text-white dark:border-0 dark:shadow-none
             dark:hover:bg-transparent dark:hover:text-white 
             dark:hover:shadow-none dark:hover:border-0"
                >
                    <img
                        src={`https://flagcdn.com/w20/${currentLang.code.toLowerCase()}.png`}
                        alt={currentLang.country}
                        className="w-5 h-4 rounded-sm"
                    />
                    <ChevronDown />
                    <span className="sr-only">Change language</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader className="mt-6">
                    <DialogTitle>Select Language</DialogTitle>
                </DialogHeader>
                <FieldGroup>
                    <Field>
                        <Input
                            className="shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 hover:shadow-none"
                            placeholder="Search for a country or language"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Field>
                </FieldGroup>
                <DialogDescription>Select your preferred language and region.</DialogDescription>
                <div className="-mx-4 max-h-[50vh] overflow-y-auto px-4">
                    {filteredSearch.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                            <Globe className="h-8 w-8 mb-2 opacity-50" />
                            <p className="text-sm">No languages found</p>
                        </div>
                    ) : (
                        filteredSearch.map(({ country, language, code }, index) => (
                            <button
                                key={`${code}-${country}-${language}-${index}`}
                                onClick={() => handleSelect({ country, language, code })}
                                className={`w-full flex items-center gap-3 p-3 text-left rounded-lg transition-all ${
                                    isCurrent({ country, language, code })
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "hover:bg-accent hover:text-accent-foreground"
                                }`}
                            >
                                <span className="inline-block w-6 h-4 shrink-0">
                                    <img
                                        src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
                                        alt={`${country} flag`}
                                        className="w-6 h-4 object-cover rounded"
                                        loading="lazy"
                                    />
                                </span>
                                <div className="min-w-0 flex-1">
                                    <div className="font-medium truncate">{language}</div>
                                    <div className="text-xs text-muted-foreground truncate">
                                        {country}
                                    </div>
                                </div>
                                {isCurrent({ country, language, code }) && (
                                    <Check className="h-4 w-4 ml-auto shrink-0 text-primary-foreground" />
                                )}
                            </button>
                        ))
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default LanguageDiaglog
