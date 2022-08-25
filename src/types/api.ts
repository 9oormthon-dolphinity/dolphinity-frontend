export interface User {
  id: string;
  name: string;
}

export interface Comment {
  id: number;
  createdAt: string;
  updateAt: string | null;
  deletedAt: string | null;
  content: string;
}

export interface Post extends Ping {
  reviews: Array<Comment>;
}

export interface Ping {
  id: number;
  createdAt: string;
  updateAt: string | null;
  deletedAt: string | null;
  title: string;
  address: string;
  lat: number;
  lng: number;
  img: string;
  situation: string;
  discovery: string;
  like: number;
}
