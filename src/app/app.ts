import { Component, inject } from '@angular/core';
import { PRODUCTOS } from './datos/catalogo';
import { Talla } from './modelos/producto';
import { TarjetaProducto } from './tarjeta-producto/tarjeta-producto';
import { Encabezado } from './encabezado/encabezado';
import { Carrito, Pedido } from './servicios/carrito';

@Component({
  imports: [TarjetaProducto, Encabezado],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  productos = PRODUCTOS;
  carrito = inject(Carrito);

  agregar(pedido: Pedido) {
    this.carrito.agregar(pedido);
  }
}
