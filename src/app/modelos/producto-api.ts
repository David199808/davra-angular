export type ProductoApi = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
};

export type RespuestaApi = {
  products: ProductoApi[];
};
