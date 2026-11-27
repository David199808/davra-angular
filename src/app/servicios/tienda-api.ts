import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map } from 'rxjs';
import { ProductoApi, RespuestaApi } from '../modelos/producto-api';
import { Producto } from '../modelos/producto';

@Service()
export class TiendaApi {
  http = inject(HttpClient);

  obtenerCamisas() {
    return this.http
      .get<RespuestaApi>('https://dummyjson.com/products/category/mens-shirts')
      .pipe(map((respuesta) => respuesta.products.map((p) => this.convertir(p))));
  }

  convertir(p: ProductoApi): Producto {
    return {
      id: p.id,
      nombre: p.title,
      precio: Math.round(p.price * 4000),
      imagen: p.thumbnail,
      tallas: ['S', 'M', 'L', 'XL'],
      categoria: 'hombre',
    };
  }
}
