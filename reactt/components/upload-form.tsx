"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { uploadVideo } from "@/lib/actions"
import { Upload, Loader2 } from "lucide-react"

export function UploadForm() {
  const [isUploading, setIsUploading] = useState(false)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!videoFile) {
      toast({
        title: "No video selected",
        description: "Please select a video file to upload",
        variant: "destructive",
      })
      return
    }

    if (!title.trim()) {
      toast({
        title: "Title required",
        description: "Please provide a title for your video",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append("video", videoFile)
      formData.append("title", title)
      formData.append("description", description)

      const result = await uploadVideo(formData)

      toast({
        title: "Upload successful!",
        description: "Your video has been uploaded and is being processed.",
      })

      router.push(`/video/${result.id}`)
    } catch (error) {
      console.error("Upload error:", error)
      toast({
        title: "Upload failed",
        description: "There was an error uploading your video. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="video">Video File</Label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center">
          {videoFile ? (
            <div className="space-y-2">
              <p className="font-medium">{videoFile.name}</p>
              <p className="text-sm text-muted-foreground">{(videoFile.size / (1024 * 1024)).toFixed(2)} MB</p>
              <Button type="button" variant="outline" onClick={() => setVideoFile(null)}>
                Change File
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                <Upload className="h-12 w-12 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Drag and drop your video file here, or click to browse</p>
              <Input
                id="video"
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setVideoFile(e.target.files[0])
                  }
                }}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  document.getElementById("video")?.click()
                }}
              >
                Select Video
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter video title"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter video description (optional)"
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isUploading}>
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            Upload Video
          </>
        )}
      </Button>
    </form>
  )
}
