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
import { Check, Globe } from "lucide-react"

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

    const [currentLang, setCurrentLang] = useState("EN")

    useEffect(() => {
        const saved = localStorage.getItem("lang") || "EN"
        setCurrentLang(saved.toUpperCase())
    }, [])

    const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0]

    const handleSelect = (code: string) => {
        setCurrentLang(code)
        localStorage.setItem("lang", code)
        document.documentElement.lang = code.toLowerCase()
        setOpen(false)
        setSearch("")
    }

    const filteredSearch = languages.filter(
        (lang) =>
            lang.language.toLowerCase().includes(search.toLowerCase()) ||
            lang.country.toLowerCase().includes(search.toLowerCase()),
    )
    console.log(currentLang)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-transparent text-white border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 hover:shadow-none"
                >
                    <img
                        src={`https://flagcdn.com/w20/${currentLang.toLowerCase()}.png`}
                        alt={currentLanguage?.country}
                        className="w-5 h-4 rounded-sm"
                    />
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
                <DialogDescription className="flex-1">
                    <div className="-mx-4 max-h-[50vh] overflow-y-auto px-4">
                        {filteredSearch.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                                <Globe className="h-8 w-8 mb-2 opacity-50" />
                                <p className="text-sm">No languages found</p>
                            </div>
                        ) : (
                            filteredSearch.map(({ country, language, code }) => (
                                <button
                                    key={`${country}-${language}-${code}`}
                                    onClick={() => handleSelect(code)}
                                    className={`w-full flex items-center gap-3 p-3 text-left rounded-lg transition-all ${
                                        currentLang === code
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
                                    {currentLang === code && (
                                        <Check className="h-4 w-4 ml-auto shrink-0 text-primary-foreground" />
                                    )}
                                </button>
                            ))
                        )}
                    </div>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}

export default LanguageDiaglog
