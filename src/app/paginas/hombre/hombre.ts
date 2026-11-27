import { Component, computed, inject } from '@angular/core';
import { Carrito } from '../../servicios/carrito';
import { Pedido } from '../../modelos/pedido';
import { TarjetaProducto } from '../../tarjeta-producto/tarjeta-producto';
import { TiendaApi } from '../../servicios/tienda-api';

@Component({
  imports: [TarjetaProducto],
  selector: 'app-hombre',
  styleUrl: './hombre.css',
  templateUrl: './hombre.html',
})
export class Hombre {
  api = inject(TiendaApi);
  carrito = inject(Carrito);
  productos = computed(() => this.api.productos().filter((p) => p.categoria === 'hombre'));

  agregar(pedido: Omit<Pedido, 'cantidad'>) {
    this.carrito.agregar(pedido);
    console.log(this.carrito.items());
  }
}
