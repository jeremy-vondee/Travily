import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { flowType: "implicit" },
})

export async function sendOtp(email: string) {
    const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            shouldCreateUser: true,
        },
    })

    return { data, error }
}

export async function sendMagicLink(email: string) {
    const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            shouldCreateUser: true,
            emailRedirectTo: `${window.location.origin}/`,
        },
    })

    return { data, error }
}
