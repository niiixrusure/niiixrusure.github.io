import { RegisterForm } from "@/components/register-form"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="container mx-auto py-8 max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-muted-foreground mt-2">Sign up to start sharing your videos</p>
      </div>

      <RegisterForm />

      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
