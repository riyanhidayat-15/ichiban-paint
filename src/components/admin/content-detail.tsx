"use client";

import { Button } from "@/components/ui/button";
import { Content } from "@/lib/types/content";

type Props = {
  content: Content | null;
  onClose: () => void;
};

function getYoutubeId(url: string): string | null {
  const match =
    url.match(/v=([^&]+)/) ||
    url.match(/youtu\.be\/([^?]+)/) ||
    url.match(/shorts\/([^?]+)/);

  return match ? match[1] : null;
}

function getTiktokEmbed(url: string) {
  const match = url.match(/video\/(\d+)/);
  return match ? `https://www.tiktok.com/embed/v2/${match[1]}` : null;
}

export default function ContentDetail({ content, onClose }: Props) {
  if (!content) return null;

  const videoId = getYoutubeId(content.video_url);
  const tiktokEmbed = getTiktokEmbed(content.video_url);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background p-6 rounded-xl w-full max-w-xl space-y-4">
        <h2 className="text-lg font-semibold">{content.title}</h2>

        {/* VIDEO */}
        {content.platform === "youtube" && videoId && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            className="w-full aspect-video rounded"
            allowFullScreen
          />
        )}

        {content.platform === "tiktok" && tiktokEmbed && (
          <iframe
            src={tiktokEmbed}
            className="w-full aspect-video rounded"
            allowFullScreen
          />
        )}

        {/* INFO */}
        <div className="text-sm text-muted-foreground">
          <p>Platform: {content.platform}</p>
          <p>Status: {content.is_active ? "Active" : "Inactive"}</p>
        </div>

        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}
