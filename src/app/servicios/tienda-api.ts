import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map } from 'rxjs';
import { ProductoApi, RespuestaApi } from '../modelos/producto-api';
import { Categoria, Producto } from '../modelos/producto';
import { toSignal } from '@angular/core/rxjs-interop';

const CATEGORIAS: Record<string, Categoria> = {
  'mens-shirts': 'hombre',
  'mens-shoes': 'hombre',
  'mens-watches': 'hombre',
  'womens-dresses': 'mujer',
  'womens-shoes': 'mujer',
  'womens-bags': 'mujer',
  tops: 'mujer',
};

@Service()
export class TiendaApi {
  http = inject(HttpClient);

  productos = toSignal(this.obtenerProductos(), { initialValue: [] });

  obtenerProductos() {
    return this.http
      .get<RespuestaApi>('https://dummyjson.com/products?limit=0')
      .pipe(
        map((respuesta) =>
          respuesta.products.filter((p) => p.category in CATEGORIAS).map((p) => this.convertir(p)),
        ),
      );
  }

  buscar(id: number) {
    return this.productos().find((p) => p.id === id);
  }

  convertir(p: ProductoApi): Producto {
    return {
      id: p.id,
      nombre: p.title,
      precio: Math.round(p.price * 4000),
      imagen: p.thumbnail,
      tallas: ['S', 'M', 'L', 'XL'],
      categoria: CATEGORIAS[p.category],
    };
  }
}
