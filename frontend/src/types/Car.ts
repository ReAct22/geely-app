export interface CarPrice {
  id: number;
  id_mobil: number;
  harga: number;
  model: string;
  discount: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface CarColor {
  id: number;
  id_mobil: number;
  hex: string;
  image: string;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface CarInterior {
  id: number;
  id_mobil: number;
  image: string;
  name: string;
  deskripsi: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface CarExterior {
  id: number;
  id_mobil: number;
  image: string;
  name: string;
  deskripsi: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface Car {
  id: number;
  name: string;
  slug: string;
  deskripsi: string;
  cover: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;

  // Relasi
  prices: CarPrice[];
  color: CarColor[];
  interiors: CarInterior[];
  exteriors: CarExterior[];
}
