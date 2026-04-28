import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
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
import { AlertCircle, Mail } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const AuthDialog = () => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    // Email validation helper
    const isValidEmail = (value: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    }

    const signInWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${window.location.origin}/`,
            },
        })
    }

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setEmailError("")
        setMessage("")

        // Frontend validation
        if (!isValidEmail(email)) {
            setEmailError("Please enter a valid email address.")
            return
        }

        setLoading(true)

        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${window.location.origin}/`,
            },
        })

        if (error) {
            setEmailError(error.message)
        } else {
            setMessage("Check your email for the magic link.")
        }

        setLoading(false)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:border-white/40 text-white h-10 px-6 rounded-xl font-medium transition-all duration-200"
                >
                    Sign in
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Welcome to TRAVILY</DialogTitle>
                    <DialogDescription className="text-lg">
                        Sign in to save searches, find great deals, and more.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 w-full rounded-xl border"
                        onClick={signInWithGoogle}
                    >
                        <img src="/google.svg" alt="Google logo" className="mr-3 h-5 w-5" />
                        Continue with Google
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with email
                            </span>
                        </div>
                    </div>

                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                        <FieldGroup>
                            <Field>
                                <Input
                                    id="email"
                                    type="email"
                                    className={`h-12 rounded-xl px-4 py-3 text-lg shadow-none ${
                                        emailError
                                            ? "border-destructive focus:ring-2 focus:ring-destructive"
                                            : "focus-visible:ring-2 focus-visible:ring-primary/40"
                                    }`}
                                    placeholder="Enter your email"
                                    value={email}
                                    required
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        if (emailError) setEmailError("")
                                    }}
                                />
                            </Field>
                        </FieldGroup>

                        {emailError && (
                            <Alert className="border-destructive bg-destructive/10">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{emailError}</AlertDescription>
                            </Alert>
                        )}

                        {message && (
                            <Alert className="border-green-500 bg-green-500/10">
                                <Mail className="h-4 w-4" />
                                <AlertDescription>{message}</AlertDescription>
                            </Alert>
                        )}

                        <Button
                            type="submit"
                            className="h-12 w-full rounded-xl text-lg"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Mail className="mr-2 h-4 w-4 animate-pulse" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Mail className="mr-2 h-4 w-4" />
                                    Send magic link
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AuthDialog
