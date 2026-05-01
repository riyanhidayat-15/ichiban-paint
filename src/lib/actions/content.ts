import { supabase } from "../supabase";
import { Content, ContentRow, CreateContentPayload } from "../types/content";

// =======================
// GET ALL
// =======================
export async function getContents(): Promise<Content[]> {
  const { data, error } = await supabase
    .from("contents")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return (data as ContentRow[]).map((c) => ({
    id: c.id,
    title: c.title,
    thumbnail: c.thumbnail,
    video_url: c.video_url,
    platform: c.platform,
    is_active: c.is_active,
  }));
}

// =======================
// CREATE
// =======================
export async function createContent(
  payload: CreateContentPayload,
): Promise<{ id: string }> {
  const { data, error } = await supabase
    .from("contents")
    .insert([payload])
    .select("id")
    .single();

  if (error) throw error;
  return data as { id: string };
}

// =======================
// DELETE
// =======================
export async function deleteContent(id: string): Promise<void> {
  const { error } = await supabase.from("contents").delete().eq("id", id);

  if (error) throw error;
}

// =======================
// TOGGLE STATUS
// =======================
export async function toggleContent(
  id: string,
  current: boolean,
): Promise<void> {
  const { error } = await supabase
    .from("contents")
    .update({ is_active: !current })
    .eq("id", id);

  if (error) throw error;
}

// =======================
// GET DETAIL (optional)
// =======================
export async function getContentById(id: string): Promise<Content | null> {
  const { data, error } = await supabase
    .from("contents")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    video_url: data.video_url,
    platform: data.platform,
    is_active: data.is_active,
  };
}
