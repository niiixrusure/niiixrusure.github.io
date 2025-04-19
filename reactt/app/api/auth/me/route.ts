import { cookies } from "next/headers"
import { NextResponse } from "next/server"

// Mock user database - replace with actual database in production
const users = [
  {
    id: "user1",
    name: "Demo User",
    email: "user@example.com",
  },
]

export async function GET() {
  const sessionCookie = cookies().get("session")

  if (!sessionCookie?.value) {
    return NextResponse.json({ user: null }, { status: 401 })
  }

  try {
    const session = JSON.parse(sessionCookie.value)

    if (!session.userId) {
      return NextResponse.json({ user: null }, { status: 401 })
    }

    // In a real app, fetch user from database
    const user = users.find((u) => u.id === session.userId)

    if (!user) {
      return NextResponse.json({ user: null }, { status: 401 })
    }

    // Don't send sensitive information to the client
    const { password, ...safeUser } = user as any

    return NextResponse.json({ user: safeUser })
  } catch (error) {
    console.error("Session parsing error:", error)
    return NextResponse.json({ user: null }, { status: 401 })
  }
}
