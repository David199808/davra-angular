import { Component, inject } from '@angular/core';
import { PRODUCTOS } from '../../datos/catalogo';
import { Carrito } from '../../servicios/carrito';
import { Pedido } from '../../modelos/pedido';
import { TarjetaProducto } from '../../tarjeta-producto/tarjeta-producto';

@Component({
  imports: [TarjetaProducto],
  selector: 'app-mujer',
  styleUrl: './mujer.css',
  templateUrl: './mujer.html',
})
export class Mujer {
  carrito = inject(Carrito);
  productos = PRODUCTOS.filter((p) => p.categoria === 'mujer');

  agregar(pedido: Omit<Pedido, 'cantidad'>) {
    this.carrito.agregar(pedido);
    console.log(this.carrito.items());
  }
}
