"use client";

import { useState } from "react";
import { createContent } from "@/lib/actions/content";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  onSuccess: () => void;
};

// 🔥 helper
function getYoutubeThumbnail(url: string): string {
  const match =
    url.match(/v=([^&]+)/) ||
    url.match(/youtu\.be\/([^?]+)/) ||
    url.match(/shorts\/([^?]+)/);

  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : "";
}

function detectPlatform(url: string): "youtube" | "tiktok" | "instagram" {
  if (url.includes("youtube") || url.includes("youtu.be")) return "youtube";
  if (url.includes("tiktok")) return "tiktok";
  if (url.includes("instagram")) return "instagram";
  return "youtube";
}

export default function ContentForm({ open, setOpen, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    thumbnail: "",
    video_url: "",
    platform: "youtube" as "youtube" | "tiktok" | "instagram",
  });

  const handleSubmit = async () => {
    if (!form.title || !form.video_url) {
      alert("Title & Video URL wajib diisi");
      return;
    }

    try {
      setLoading(true);

      await createContent({
        ...form,
        is_active: true,
      });

      setForm({
        title: "",
        thumbnail: "",
        video_url: "",
        platform: "youtube",
      });

      onSuccess();
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Gagal tambah content");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background p-6 rounded-xl w-full max-w-md space-y-4">
        <h2 className="text-lg font-semibold">Add Content</h2>

        {/* TITLE */}
        <input
          type="text"
          placeholder="Title"
          className="w-full border px-3 py-2 rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        {/* VIDEO URL */}
        <input
          type="text"
          placeholder="Paste YouTube / TikTok / IG URL"
          className="w-full border px-3 py-2 rounded"
          value={form.video_url}
          onChange={(e) => {
            const url = e.target.value;

            setForm({
              ...form,
              video_url: url,
              thumbnail: getYoutubeThumbnail(url),
              platform: detectPlatform(url),
            });
          }}
        />

        {/* OPTIONAL: preview thumbnail */}
        {form.thumbnail && (
          <img
            src={form.thumbnail}
            className="w-full rounded"
            alt="thumbnail"
          />
        )}

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
}
