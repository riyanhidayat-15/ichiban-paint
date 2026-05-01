export type ContentRow = {
  id: string;
  title: string;
  thumbnail: string;
  video_url: string;
  platform: string;
  is_active: boolean;
  created_at: string;
};

export type Content = {
  id: string;
  title: string;
  thumbnail: string;
  video_url: string;
  platform: string;
  is_active: boolean;
};

export type CreateContentPayload = {
  title: string;
  thumbnail: string;
  video_url: string;
  platform: string;
  is_active?: boolean;
};
