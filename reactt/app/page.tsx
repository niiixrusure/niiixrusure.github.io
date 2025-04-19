import Link from "next/link"
import { getVideos } from "@/lib/videos"
import { VideoCard } from "@/components/video-card"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export default async function Home() {
  const videos = await getVideos()

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">VideoShare</h1>
        <Link href="/upload">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Video
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
        {videos.length === 0 && (
          <div className="col-span-full text-center py-12">
            <h2 className="text-xl font-medium mb-2">No videos yet</h2>
            <p className="text-muted-foreground mb-4">Be the first to upload a video!</p>
            <Link href="/upload">
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload Video
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
