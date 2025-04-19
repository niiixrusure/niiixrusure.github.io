import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Video } from "@/lib/types"

interface VideoCardProps {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/video/${video.id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-video relative overflow-hidden">
          {video.thumbnailUrl ? (
            <Image src={video.thumbnailUrl || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">No thumbnail</span>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-2">{video.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{video.user?.name || "Anonymous"}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
          {video.views} views • {formatDistanceToNow(new Date(video.createdAt), { addSuffix: true })}
        </CardFooter>
      </Card>
    </Link>
  )
}
