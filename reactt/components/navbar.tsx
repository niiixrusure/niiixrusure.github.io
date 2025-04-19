"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Film, LogIn, Upload, User } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

export function Navbar() {
  const pathname = usePathname()
  const { user, isLoading } = useAuth()

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Film className="h-6 w-6" />
          <span className="text-xl font-bold">VideoShare</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/upload">
            <Button variant="ghost" size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </Link>
          {!isLoading && !user ? (
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
          ) : (
            <Link href="/profile">
              <Button variant="outline" size="sm">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
