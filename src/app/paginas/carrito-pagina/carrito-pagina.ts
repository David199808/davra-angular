import { Component, inject } from '@angular/core';
import { Carrito } from '../../servicios/carrito';
import { PRODUCTOS } from '../../datos/catalogo';

@Component({
  imports: [],
  selector: 'app-carrito-pagina',
  styleUrl: './carrito-pagina.css',
  templateUrl: './carrito-pagina.html',
})
export class CarritoPagina {
  productos = PRODUCTOS;
  carrito = inject(Carrito);

  buscar(id: number) {
    return this.productos.find((p) => p.id === id);
  }
}
