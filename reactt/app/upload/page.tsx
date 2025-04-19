import { UploadForm } from "@/components/upload-form"
import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"

export default async function UploadPage() {
  const session = await getSession()

  if (!session) {
    redirect("/auth/login?redirect=/upload")
  }

  return (
    <div className="container mx-auto py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Upload Video</h1>
      <UploadForm />
    </div>
  )
}
