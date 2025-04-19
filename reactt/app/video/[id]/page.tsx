import { getVideoById } from "@/lib/videos"
import { VideoPlayer } from "@/components/video-player"
import { CommentSection } from "@/components/comment-section"
import { formatDistanceToNow } from "date-fns"
import { notFound } from "next/navigation"

interface VideoPageProps {
  params: {
    id: string
  }
}

export default async function VideoPage({ params }: VideoPageProps) {
  const video = await getVideoById(params.id)

  if (!video) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <VideoPlayer video={video} />

          <div className="mt-4">
            <h1 className="text-2xl font-bold">{video.title}</h1>
            <div className="flex items-center mt-2 text-sm text-muted-foreground">
              <span>{video.views} views</span>
              <span className="mx-2">•</span>
              <span>{formatDistanceToNow(new Date(video.createdAt), { addSuffix: true })}</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {video.user?.name?.[0] || "A"}
              </div>
              <div className="ml-3">
                <p className="font-medium">{video.user?.name || "Anonymous"}</p>
                <p className="text-sm text-muted-foreground">{video.user?.subscribers || 0} subscribers</p>
              </div>
            </div>
            <p className="text-sm whitespace-pre-line">{video.description}</p>
          </div>

          <CommentSection videoId={video.id} />
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Related Videos</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm">Related videos will appear here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
