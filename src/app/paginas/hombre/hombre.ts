import { Component, inject } from '@angular/core';
import { PRODUCTOS } from '../../datos/catalogo';
import { Carrito } from '../../servicios/carrito';
import { Pedido } from '../../modelos/pedido';
import { TarjetaProducto } from '../../tarjeta-producto/tarjeta-producto';

@Component({
  imports: [TarjetaProducto],
  selector: 'app-hombre',
  styleUrl: './hombre.css',
  templateUrl: './hombre.html',
})
export class Hombre {
  carrito = inject(Carrito);
  productos = PRODUCTOS.filter((p) => p.categoria === 'hombre');

  agregar(pedido: Omit<Pedido, 'cantidad'>) {
    this.carrito.agregar(pedido);
    console.log(this.carrito.items());
  }
}
