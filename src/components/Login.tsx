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
import { CircleUserRound, Mail } from "lucide-react"

const LogIn = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className=" sm:mb-3 bg-transparent text-white border-0 shadow-none
                     focus-visible:ring-0 focus-visible:ring-offset-0
                     hover:shadow-none cursor-pointer
                     dark:bg-transparent dark:text-white dark:border-0 dark:shadow-none
                     dark:hover:bg-transparent dark:hover:text-white
                     dark:hover:shadow-none dark:hover:border-0 "
                >
                    <CircleUserRound className="[&_svg]:size-7 shrink-0 text-white" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader className="mt-6">
                    <DialogTitle>Welcome to TRAVILY. Let's get you going.</DialogTitle>
                    <DialogDescription>
                        Sign in or create an account to save searches, find grate deals, and more.
                    </DialogDescription>
                </DialogHeader>
                <a
                    href="#"
                    className="inline-flex items-center gap-1 pl-1 h-10 border rounded-lg justify-center"
                >
                    <img src="/public/google.svg" alt="Google logo" />
                    <span className="leading-none"> Google</span>
                </a>
                <div className="flex items-center mt2">
                    <hr className="grow border-slate-200 dark:border-slate-700 h-px" />
                    <span className="shrink-0 px-4 py-2 text-xs font-semibold tracking-wider text-slate-500">
                        OR
                    </span>
                    <hr className="grow border-slate-200 dark:border-slate-700 h-px" />
                </div>
                <FieldGroup>
                    <Field>
                        <Input
                            id="email"
                            className="shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 hover:shadow-none"
                            placeholder="Enter email"
                            type="email"
                        />
                    </Field>
                </FieldGroup>
                <Button type="submit" className="mt-4">
                    <Mail className="rounded" />
                    Continue with email
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default LogIn
