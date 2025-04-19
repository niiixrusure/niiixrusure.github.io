"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"
import type { Comment } from "@/lib/types"
import { addComment, getComments } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

interface CommentSectionProps {
  videoId: string
}

export function CommentSection({ videoId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { user } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await getComments(videoId)
        setComments(data)
      } catch (error) {
        console.error("Failed to load comments:", error)
        toast({
          title: "Error loading comments",
          description: "Please try refreshing the page.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadComments()
  }, [videoId, toast])

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      toast({
        title: "Login required",
        description: "Please login to comment on videos",
        variant: "destructive",
      })
      return
    }

    if (!newComment.trim()) return

    setIsSubmitting(true)

    try {
      const comment = await addComment({
        videoId,
        content: newComment,
      })

      setComments([comment, ...comments])
      setNewComment("")

      toast({
        title: "Comment added",
        description: "Your comment has been posted successfully.",
      })
    } catch (error) {
      console.error("Failed to add comment:", error)
      toast({
        title: "Failed to add comment",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">{comments.length} Comments</h2>

      {user ? (
        <form onSubmit={handleSubmitComment} className="mb-6">
          <div className="flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarFallback>{user.name?.[0] || "U"}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-2 resize-none"
                rows={2}
              />
              <div className="flex justify-end gap-2">
                <Button type="button" variant="ghost" onClick={() => setNewComment("")} disabled={isSubmitting}>
                  Cancel
                </Button>
                <Button type="submit" disabled={!newComment.trim() || isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Posting...
                    </>
                  ) : (
                    "Comment"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="mb-6 p-4 bg-muted rounded-lg text-center">
          <p className="mb-2">Sign in to add a comment</p>
          <Button variant="outline" onClick={() => (window.location.href = "/auth/login")}>
            Login
          </Button>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <div className="space-y-6">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="flex gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>{comment.user?.name?.[0] || "A"}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{comment.user?.name || "Anonymous"}</span>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                    </span>
                  </div>
                  <p className="mt-1">{comment.content}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-4">No comments yet. Be the first to comment!</p>
          )}
        </div>
      )}
    </div>
  )
}
