export type Categoria = 'hombre' | 'mujer';
export type Talla = 'S' | 'M' | 'L' | 'XL';

export interface Producto {
  readonly id: number;
  nombre: string;
  precio: number;
  tallas: Talla[];
  categoria: Categoria;
  imagen: string;
}
