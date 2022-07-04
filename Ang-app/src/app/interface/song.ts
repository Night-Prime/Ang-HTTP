export interface Playlist {
  id?: number;
  artist: string;
  track: string;
  listened: boolean;
  favorites: boolean;
  isLiked: any;
}

// Declaring the structure and enforcing the type of data we are getting from the API
