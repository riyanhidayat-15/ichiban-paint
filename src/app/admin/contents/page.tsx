"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  deleteContent,
  getContents,
  toggleContent,
} from "@/lib/actions/content";
import { Content } from "@/lib/types/content";
import ContentDetail from "@/components/admin/content-detail";
import ContentForm from "@/components/admin/content-form";

export default function ContentPage() {
  const [contents, setContents] = useState<Content[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);

  const fetchData = async () => {
    const data = await getContents();
    setContents(data);
  };

  useEffect(() => {
    const run = async () => {
      const data = await getContents();
      setContents(data);
    };

    run();
  }, []);

  return (
    <>
      <ContentDetail
        content={selectedContent}
        onClose={() => setSelectedContent(null)}
      />

      <div className="p-6 space-y-4">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Content Video</h1>
          <Button onClick={() => setOpen(true)}>+ Add Content</Button>
        </div>

        <div className="border rounded-lg overflow-x-auto">
          <table className="w-full min-w-[900px] text-base">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-2 text-left w-12">No</th>
                <th className="px-4 py-2 text-left w-20">Thumbnail</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Platform</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {contents.map((c, i) => (
                <tr key={c.id} className="border-t">
                  <td className="px-4 py-2">{i + 1}</td>

                  <td className="px-4 py-2">
                    <Image
                      src={c.thumbnail || "/placeholder.png"}
                      width={64}
                      height={40}
                      alt=""
                      className="rounded object-cover"
                    />
                  </td>

                  <td className="px-4 py-2">{c.title}</td>

                  <td className="px-4 py-2 capitalize">{c.platform}</td>

                  <td className="px-4 py-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={async () => {
                        await toggleContent(c.id, c.is_active);
                        fetchData();
                      }}
                    >
                      {c.is_active ? "Active" : "Inactive"}
                    </Button>
                  </td>

                  <td className="px-4 py-2">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedContent(c)}
                      >
                        Detail
                      </Button>

                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={async () => {
                          await deleteContent(c.id);
                          fetchData();
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ContentForm open={open} setOpen={setOpen} onSuccess={fetchData} />
      </div>
    </>
  );
}
