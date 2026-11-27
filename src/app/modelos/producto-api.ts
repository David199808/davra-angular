export type ProductoApi = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export type RespuestaApi = {
  products: ProductoApi[];
};
